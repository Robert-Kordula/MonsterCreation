import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, Sequelize } from "sequelize";
import Monster from "./Monster";

interface Condition_Model extends Model<InferAttributes<Condition_Model>, InferCreationAttributes<Condition_Model>> {
    id: CreationOptional<number>;
    name: string;
}
interface Immunities_Model extends Model<InferAttributes<Immunities_Model>, InferCreationAttributes<Immunities_Model>> {
    monster_id?: ForeignKey<number>;
    condition_id?: ForeignKey<number>;
}

function Condition_Immunity(sequelize: Sequelize) {
    let condition_immunity = sequelize.define<Condition_Model>('condition_immunity', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 20]
            }
        }
    });
    Condition_Immunity(sequelize)
    return condition_immunity;
}

function Condition_Immunities(sequelize: Sequelize) {
    let condition_Immunities = sequelize.define<Immunities_Model>('condition_immunities', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        condition_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Condition_Immunity(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });
    Monster(sequelize).belongsToMany(Condition_Immunity(sequelize), { through: condition_Immunities});
    return condition_Immunities;
}

export default Condition_Immunities;
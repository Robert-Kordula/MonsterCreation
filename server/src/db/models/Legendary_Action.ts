import { Model, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

interface Legendary_Model extends Model<InferAttributes<Legendary_Model>, InferCreationAttributes<Legendary_Model>> {
    id: CreationOptional<number>;
    monster_id: CreationOptional<number>;
    name: string;
    desc: string;
}

export default function(sequelize: Sequelize) {
    let legendary_actions = sequelize.define<Legendary_Model>('legendary_actions', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 1023]
            }
        }
    });
    Monster(sequelize).hasMany(legendary_actions, { foreignKey: 'monster_id'});
    return legendary_actions;
}
import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

interface Condition_Model extends Model<InferAttributes<Condition_Model>, InferCreationAttributes<Condition_Model>> {
    id: CreationOptional<number>;
    name: string;
}
interface Immunities_Model extends Model<InferAttributes<Immunities_Model>, InferCreationAttributes<Immunities_Model>> {
    monster_id: CreationOptional<number>;
    condition_id: CreationOptional<number>;
}

export const Condition_Immunity = sequelizeConnection.define<Condition_Model>('condition_immunity', {
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
    },
    
});

const Condition_Immunities = sequelizeConnection.define<Immunities_Model>('condition_immunities', {
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    condition_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Condition_Immunity, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

export default Condition_Immunities;
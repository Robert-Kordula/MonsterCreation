import { ForeignKey, DataTypes, Model, Optional, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

export interface Language_Model extends Model<InferAttributes<Language_Model>, InferCreationAttributes<Language_Model>> {
    id: CreationOptional<number>;
    name: string;
}
export interface Languages_Model extends Model<InferAttributes<Languages_Model>, InferCreationAttributes<Languages_Model>> {
    monster_id: ForeignKey<number>;
    language_id: ForeignKey<number>;
}

// export interface LanguageInput extends Optional<LanguageAttributes, 'language_id'> {}
// export interface LanguageOuput extends Required<LanguageAttributes> {}

const Language = sequelizeConnection.define('language', {
    id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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

const Languages = sequelizeConnection.define<Languages_Model>('language_list', {
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
    language_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

export default {Language, Languages};
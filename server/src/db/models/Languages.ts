import { ForeignKey, DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";
export interface LanguageAttributes {
    monster_id: ForeignKey<number>;
    language_id: ForeignKey<number>;
}

export interface LanguageInput extends Optional<LanguageAttributes, 'language_id'> {}
export interface LanguageOuput extends Required<LanguageAttributes> {}

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

const Languages = sequelizeConnection.define('language_list', {});

Monster.belongsToMany(Language, {
    through: Languages, 
    foreignKey: 'language_id'
});
Language.belongsToMany(Monster, {
    through: Languages,
    foreignKey: 'monster_id'
});

export default {Language, Languages};
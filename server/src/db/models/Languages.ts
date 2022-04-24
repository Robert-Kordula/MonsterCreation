import { ForeignKey, DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../db-config";
import { NameAttributes, NameInput } from "./interfaces/nameInterfaces";
import Monster from "./Monster";
export interface LanguageAttributes {
    monster_id: ForeignKey<number>;
    language_id: ForeignKey<number>;
}

export interface LanguageInput extends Optional<LanguageAttributes, 'language_id'> {}
export interface LanguageOuput extends Required<LanguageAttributes> {}

class Language extends Model<NameAttributes, NameInput> implements NameAttributes {
    public id!: number;
    public name!: string;
}

Language.init({
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
}, {
    sequelize: sequelizeConnection,
    modelName: 'SingleLanguage',
    freezeTableName: true
});

class Languages extends Model<LanguageAttributes, LanguageInput> implements LanguageAttributes {
    public monster_id!: ForeignKey<number>;
    public language_id!: ForeignKey<number>;
}

Languages.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Language',
});

Monster.belongsToMany(Language, {
    through: Languages, 
    foreignKey: 'language_id'
});
Language.belongsToMany(Monster, {
    through: Languages,
    foreignKey: 'monster_id'
});

export {Language, Languages };
import { ForeignKey, DataTypes, Model } from "sequelize/types";
import sequelizeConnection from "../db-config";
import { NameAttributes, NameInput } from "./interfaces/nameInterfaces";

import Monster from "./Monster";

export interface LanguageAttributes {
    monster_id: ForeignKey<number>;
    language_id: ForeignKey<number>;
}

class Language extends Model<NameAttributes, NameInput> implements NameAttributes {
    public id!: number;
    public name!: string;
}

Language.init({
    id: {
        type: DataTypes.STRING,
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
    modelName: 'Language',
    tableName: 'Language'
});

class Languages extends Model {}

Languages.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Languages',
    tableName: 'Languages'
});

Monster.belongsToMany(Language, {through: Languages});
Language.belongsToMany(Monster, {through: Languages});

export default Languages;
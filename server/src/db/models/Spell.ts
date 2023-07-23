import { Optional, DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db-config";

export interface SpellAttributes {
    id: number;
    url: string;
}

export interface SpellInput extends Optional<SpellAttributes, 'id'> {}
export interface SpellOutput extends Required<SpellAttributes> {}

export default sequelizeConnection.define('spells', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    }
});
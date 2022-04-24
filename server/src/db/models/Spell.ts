import { Optional, DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db-config";

export interface SpellAttributes {
    id: number;
    url: string;
}

export interface SpellInput extends Optional<SpellAttributes, 'id'> {}
export interface SpellOutput extends Required<SpellAttributes> {}

class Spell extends Model<SpellAttributes, SpellInput> implements SpellAttributes {
    public id!: number;
    public url!: string;
}

Spell.init({
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
}, {
    sequelize: sequelizeConnection,
    modelName: 'Spell',
    tableName: 'Spells'
});

export default Spell;
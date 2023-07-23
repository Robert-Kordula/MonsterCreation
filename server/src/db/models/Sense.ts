import { Optional, DataTypes, ForeignKey, Model } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

export interface SenseAttributes {
    id: number;
    monster_id: ForeignKey<number>;
    sense: string;
}

export interface SenseInput extends Optional<SenseAttributes, 'id'> {}
export interface SenseOutput extends Required<SenseAttributes> {}

const Senses = sequelizeConnection.define('senses', {
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true
    }, 
    sense: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 20]
        }
    }
});

Monster.hasMany(Senses, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Senses;
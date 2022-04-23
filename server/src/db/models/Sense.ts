import { Optional, DataTypes, ForeignKey, Model } from "sequelize/types";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

export interface SenseAttributes {
    id: number;
    monster_id: ForeignKey<number>;
    sense: string;
}

export interface SenseInput extends Optional<SenseAttributes, 'id'> {}
export interface SenseOutput extends Required<SenseAttributes> {}

class Sense extends Model<SenseAttributes, SenseInput> {
    public id!: number;
    public monster_id!: ForeignKey<number>;
    public sense!: string;
}

Sense.init({
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
}, {
    sequelize: sequelizeConnection,
    modelName: 'Sense',
    tableName: 'Senses'
});

Monster.hasMany(Sense, {
    foreignKey: {
        name: 'id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Sense.belongsTo(Monster);

export default Sense;
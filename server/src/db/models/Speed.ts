import { Optional, Model, DataTypes, ForeignKey, ENUM } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";
export interface SpeedAttributes {
    monster_id: ForeignKey<number>;
    terrain: number;
    speed: number;
}

export interface SpeedInput extends Optional<SpeedAttributes, 'monster_id'> { }
export interface SpeedOutput extends Required<SpeedAttributes> { }

class Speeds extends Model<SpeedAttributes, SpeedInput> implements SpeedAttributes {
    public monster_id!: ForeignKey<number>;
    public terrain!: number;
    public speed!: number;
}

Speeds.init({
    terrain: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            customValidator: (value: string) => {
                const enums = ['WALK', 'CLIMB', 'BURROW', 'SWIM', 'FLY', 'HOVER'];
                if (!enums.includes(value)) throw new Error("Not a valid option");
            }
        }
    },
    speed: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            customValidator(value: Number) {
                if (value === null && this.terrain !== 'HOVER') {
                    throw new Error('Speed cannot be null unless it is hovering');
                }
            }
        }
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Speed',
    tableName: 'Speeds'
});

Monster.hasMany(Speeds, {
    foreignKey: 'monster_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Speeds;
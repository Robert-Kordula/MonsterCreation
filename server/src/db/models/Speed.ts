import { Optional, Model, DataTypes, ForeignKey, ENUM } from "sequelize/types";
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
        type: DataTypes.ENUM('WALK', 'CLIMB', 'BURROW', 'SWIM', 'FLY', 'HOVER'),
        allowNull: false
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
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Speeds.belongsTo(Monster);

export default Speeds;
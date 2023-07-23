import { Model, DataTypes, ForeignKey, Optional } from "sequelize";
import sequelizeConnection from "../db-config";
import { DescAttributes, DescInput } from "./interfaces/descInterface";
import Monster from "./Monster";

const Reactions = sequelizeConnection.define('reactions', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 30]
        }
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 1023]
        }
    }
});

Monster.hasMany(Reactions, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Reactions;
import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

const Legendary_Action = sequelizeConnection.define('legendary_actions', {
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

Monster.hasMany(Legendary_Action, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Legendary_Action;
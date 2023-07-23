import { Model, DataTypes } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";
export const Condition_Immunity = sequelizeConnection.define('condition_immunity', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 20]
        }
    }
});

const Condition_Immunities = sequelizeConnection.define('condition_immunities', {});

Monster.belongsToMany(Condition_Immunity, {
    through: Condition_Immunity,
    foreignKey: 'monster_id'
});
Condition_Immunity.belongsToMany(Monster, {
    through: Condition_Immunity,
    foreignKey: 'condition_id'});

export default Condition_Immunities;
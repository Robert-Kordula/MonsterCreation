import { Model, DataTypes } from "sequelize";
import sequelizeConnection from "../db-config";
import { NameAttributes, NameInput } from "./interfaces/nameInterfaces";
import Monster from "./Monster";
class Condition extends Model<NameAttributes, NameInput> implements NameAttributes {
    public id!: number;
    public name!: string;
}

Condition.init({
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
}, {
    sequelize: sequelizeConnection,
    modelName: 'Condition',
    tableName: 'Conditions'
});

class Condition_Immunity extends Model {}

Condition_Immunity.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Condition_Immunity',
    tableName: 'Condition_Immunities'
});

Monster.belongsToMany(Condition, {
    through: Condition_Immunity,
    foreignKey: 'monster_id'
});
Condition.belongsToMany(Monster, {
    through: Condition_Immunity,
    foreignKey: 'condition_id'});

export default Condition_Immunity;
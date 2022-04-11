import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

class Conditions extends Model {}

Conditions.init({

}, {
    sequelize,
    modelName: 'Conditions'
});

class Condition extends Model {}

Condition.init({
    condition_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 20]
        }
    }
}, {
    sequelize,
    modelName: 'Condition', 
    freezeTableName: true
});
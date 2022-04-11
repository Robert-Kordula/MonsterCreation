import e from "express";
import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');

class SubType extends Model {}

SubType.init({
    subtype_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 20]
        }
    }
}, {
    sequelize,
    modelName: 'Type'
});

SubType.belongsTo(Monster, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = SubType;
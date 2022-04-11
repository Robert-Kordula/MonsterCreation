import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres:');

const Monster = require('./Monster');

class Alignment extends Model {}

Alignment.init({
    alignment_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [4, 30]
        }
    }
}, {
    sequelize,
    modelName: 'Alignment'
})

Alignment.belongsTo(Monster, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Alignment;
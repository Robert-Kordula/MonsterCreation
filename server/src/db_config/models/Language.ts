import { Sequelize, DataType, Model, DataTypes } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Languages = require('./Languages');

class Language extends Model {}

Language.init({
    language_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            len: [3, 20]
        }
    }
}, {
    sequelize,
    modelName: 'Language',
    freezeTableName: true
});

Language.belongsTo(Languages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Language;
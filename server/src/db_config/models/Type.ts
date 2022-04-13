import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('postgres:');

const Monster = require('./Monster');

class Type extends Model {}

Type.init({
    type_name: {
        type:DataTypes.STRING,
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

Type.belongsTo(Monster, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Type;
import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');

class Group extends Model {}

Group.init({
    group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 30]
        }
    }
}, {
    sequelize, 
    modelName: 'Group'
});

Group.belongsTo(Monster, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Group;
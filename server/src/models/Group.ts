import { Sequelize, DataTypes } from "sequelize";

// class Group extends Model {}

// Group.init({
//     group_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             len: [3, 30]
//         }
//     }
// }, {
//     sequelize, 
//     modelName: 'Group'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Group = sequelize.define('group', {
        group_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 30]
            }
        }
    });

    Monster.belongsTo(Group);
    Group.hasMany(Monster, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    return Group;
};
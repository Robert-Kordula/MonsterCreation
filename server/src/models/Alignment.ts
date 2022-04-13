import { Sequelize, DataTypes } from "sequelize";

// class Alignment extends Model {}

// Alignment.init({
//     alignment_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         defaultValue: 'any alignment',
//         unique: true,
//         validate: {
//             len: [4, 30]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Alignment'
// })

// Monster.belongsTo(Alignment);
// Alignment.hasOne(Monster, {
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
// })

module.exports = (sequelize: Sequelize) => {
    
    const Monster = require('./Monster');

    const Alignment = sequelize.define('alignment', {
        alignment_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'any alignment',
            unique: true,
            validate: {
                len: [4, 30]
            }
        }
    });
};
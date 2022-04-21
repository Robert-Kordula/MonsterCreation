import { Sequelize, DataTypes } from "sequelize";
// class Damage_Type extends Model {}

// Damage_Type.init({
//     damage_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             len: [3, 20]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Damage_Type'
// });

module.exports = (sequelize: Sequelize) => {

    const Damage_Type = sequelize.define('damage_type', {
        damage_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 20]
            }
        }
    });

    return Damage_Type;
};
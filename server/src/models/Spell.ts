import { Sequelize, DataTypes } from "sequelize/types";

// class Spell extends Model {}

// Spell.init({
//     url: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             isUrl: true
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Spell'
// });

module.exports = (sequelize: Sequelize) => {

    const Spell = sequelize.define('spells', {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    });

    return Spell;
};
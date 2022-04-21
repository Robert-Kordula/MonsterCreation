import { Sequelize, DataTypes } from "sequelize/types";

// class Special_Ability extends Model {}

// Special_Ability.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster, 
//             key: 'id'
//         }
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: [3, 30]
//         }
//     },
//     desc: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: [5, 1023]
//         }
//     }
// }, {
//     sequelize, 
//     modelName: 'Special_Ability'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Special_Ability = sequelize.define('special_ability', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster, 
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 1023]
            }
        }
    });

    Monster.hasMany(Special_Ability);
    Special_Ability.belongsTo(Monster);

    return Special_Ability;
};
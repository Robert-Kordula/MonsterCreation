import { Sequelize, DataTypes } from "sequelize/types";

// class Conditions extends Model {}

// Conditions.init({
//     condition_name: {
//         type: DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//         validate: {
//             len: [3, 20]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Conditions'
// });

// class Condition_Immunity extends Model {}

// Condition_Immunity.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     },
//     condition_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Conditions,
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Condition_Immunities'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');

    const Conditions = sequelize.define('conditions', {
        condition_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        }
    });

    const Condition_Immunity = sequelize.define('condition_immunity', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        condition_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Conditions,
                key: 'id'
            }
        }
    });

    Monster.belongsToMany(Conditions, { through: Condition_Immunity });
    Conditions.belongsToMany(Monster, { through: Condition_Immunity });

    return Condition_Immunity;
};
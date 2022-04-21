import { Sequelize, DataTypes } from "sequelize/types";

// class Legendary_Action extends Model {}

// Legendary_Action.init({
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
//     modelName: 'Legendary_Action'
// });

module.exports = (sequelize: Sequelize) => {
    
    const Monster = require('./Monster');
    const Legendary_Action = sequelize.define('legendary_action', {
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

    Monster.hasMany(Legendary_Action);
    Legendary_Action.belongsTo(Monster);

    return Legendary_Action;
};
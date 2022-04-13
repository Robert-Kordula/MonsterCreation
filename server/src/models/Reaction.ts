import { Sequelize, DataTypes } from "sequelize/types";


// class Reaction extends Model {}

// Reaction.init({
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
//     modelName: 'Reaction'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Reaction = sequelize.define('reaction', {
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

    Monster.hasMany(Reaction);
    Reaction.belongsTo(Monster);

    return Reaction;
};
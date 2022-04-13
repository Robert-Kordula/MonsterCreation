import { Sequelize, DataTypes } from "sequelize/types";


// class Sense extends Model {}

// Sense.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     }, 
//     sense: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: [5, 20]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Sense'
// });



module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Sense = sequelize.define('sense', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        }, 
        sense: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            }
        }
    });

    Monster.hasMany(Sense, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Sense.belongsTo(Monster);

    return Sense;
};
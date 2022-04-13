import { Sequelize, DataTypes } from "sequelize/types";


// class Speed extends Model {}

// Speed.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     },
//     terrain: {
//         type: DataTypes.ENUM('WALK', 'CLIMB', 'BURROW', 'SWIM', 'FLY', 'HOVER'),
//         allowNull: false
//     },
//     speed: {
//         type: DataTypes.SMALLINT,
//         allowNull: true,
//         validate: {
//             customValidator(value: Number) {
//                 if (value === null && this.terrain !== 'HOVER') {
//                     throw new Error('Speed cannot be null unless it is hovering');
//                 }
//             }
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Speed'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Speed = sequelize.define('speed', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        terrain: {
            type: DataTypes.ENUM('WALK', 'CLIMB', 'BURROW', 'SWIM', 'FLY', 'HOVER'),
            allowNull: false
        },
        speed: {
            type: DataTypes.SMALLINT,
            allowNull: true,
            validate: {
                customValidator(value: Number) {
                    if (value === null && this.terrain !== 'HOVER') {
                        throw new Error('Speed cannot be null unless it is hovering');
                    }
                }
            }
        }
    });

    Monster.hasMany(Speed, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    Speed.belongsTo(Monster);

    return Speed;
};
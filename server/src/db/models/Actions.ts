import { Sequelize, DataTypes } from "sequelize/types";

// class Action extends Model {}

// Action.init({
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
//     },
//     attack_bonus: {
//         type:DataTypes.SMALLINT,
//         validate: {
//             checkDamage(value: number) {
//                 if (this.damage_dice === null) {
//                     throw new Error('damage_dice cannot have a value while damage_dice is null');
//                 }
//             },
//             min: 1,
//             max: 20
//         }
//     },
//     damage_dice: {
//         type: DataTypes.STRING,
//         validate: {
//             checkDamage(value: string) {
//                 if (this.attack_bonus === null) {
//                     throw new Error('damage_dice cannot have a value while attack_bonus is null');
//                 }
//             },
//             is: /([123][0-9]|[1-9])[d]([468]|1[02]|20)([+]?[0-9]{0,3})/
//         }
//     },
//     damage_bonus: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             checkDamage(value: string) {
//                 if (this.attack_bonus === null || this.damage_dice === null) {
//                     throw new Error('damage_bonus cannot have a value while attack_bonus or damage_bonus are null');
//                 }
//             },
//             min: 1,
//             max: 10
//         }
//     }
// }, {
//     sequelize, 
//     modelName: 'Action'
// });


module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');

    const Action = sequelize.define('action', {
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
        },
        attack_bonus: {
            type:DataTypes.SMALLINT,
            validate: {
                checkDamage(value: number) {
                    if (this.damage_dice === null) {
                        throw new Error('damage_dice cannot have a value while damage_dice is null');
                    }
                },
                min: 1,
                max: 20
            }
        },
        damage_dice: {
            type: DataTypes.STRING,
            validate: {
                checkDamage(value: string) {
                    if (this.attack_bonus === null) {
                        throw new Error('damage_dice cannot have a value while attack_bonus is null');
                    }
                },
                is: /([123][0-9]|[1-9])[d]([468]|1[02]|20)([+]?[0-9]{0,3})/
            }
        },
        damage_bonus: {
            type: DataTypes.SMALLINT,
            validate: {
                checkDamage(value: string) {
                    if (this.attack_bonus === null || this.damage_dice === null) {
                        throw new Error('damage_bonus cannot have a value while attack_bonus or damage_bonus are null');
                    }
                },
                min: 1,
                max: 10
            }
        }
    });

    Monster.hasMany(Action);
    Action.belongsTo(Monster);

    return Action;
};
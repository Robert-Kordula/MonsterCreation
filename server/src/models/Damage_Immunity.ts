import { Sequelize, DataTypes } from "sequelize/types";

// class Damage_Immunity extends Model {}

// Damage_Immunity.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: 'Monster',
//             key: 'id'
//         }
//     },
//     damage_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: 'Damage_Type',
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Damage_Vulnerabilities'
// });


module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Damage_Type = require('./Damage_Type')(sequelize);

    const Damage_Immunity = sequelize.define('damage_immunities', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        damage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Damage_Type,
                key: 'id'
            }
        }
    });

    Damage_Type.belongsToMany(Monster, { through: Damage_Immunity });
    Monster.belongsToMany(Damage_Type, { through: Damage_Immunity });

    return Damage_Immunity;
};
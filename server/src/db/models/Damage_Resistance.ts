import { Sequelize, DataTypes } from "sequelize";

// class Damage_Resistance extends Model {}

// Damage_Resistance.init({
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

    const Damage_Resistance = sequelize.define('damage_resistance', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Monster',
                key: 'id'
            }
        },
        damage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Damage_Type',
                key: 'id'
            }
        }
    });
    Monster.belongsToMany(Damage_Type, { through: Damage_Resistance});
    Damage_Type.belongsToMany(Monster, { through: Damage_Resistance});

    return Damage_Resistance;
};
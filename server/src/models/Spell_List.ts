import { Sequelize, DataTypes } from "sequelize/types";


// class Spell_List extends Model {}

// Spell_List.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     },
//     spell_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Spell,
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Spell_List'
// });



exports.module = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Spell = require('./Spell');

    const Spell_List = sequelize.define('spell_list', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        spell_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Spell,
                key: 'id'
            }
        }
    });

    Monster.belongsToMany(Spell, { through: Spell_List });
    Spell.belongsToMany(Monster, { through: Spell_List });

    return Spell_List;
};
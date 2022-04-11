import { Sequelize, Model, DataTypes } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');
const Damage_Type = require('./Damage_Type');

class Damage_Immunity extends Model {}

Damage_Immunity.init({
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
}, {
    sequelize,
    modelName: 'Damage_Vulnerabilities'
});

Damage_Immunity.belongsTo(Monster);
Damage_Immunity.hasOne(Damage_Type);

module.exports = Damage_Immunity;
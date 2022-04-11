import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Damage_Vulnerability = require('./Damage_Vulnerability');
const Damage_Resistance = require('./Damage_Resistance');
const Damage_Immunity = require('./Damage_Immunity');

class Damage_Type extends Model {}

Damage_Type.init({
    damage_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 20]
        }
    }
}, {
    sequelize,
    modelName: 'Damage_Type'
});

Damage_Type.belongsTo(Damage_Vulnerability, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Damage_Type.belongsTo(Damage_Resistance, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Damage_Type.belongsTo(Damage_Immunity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Damage_Type;
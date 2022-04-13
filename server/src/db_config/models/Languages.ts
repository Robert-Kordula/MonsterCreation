import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');
const Language = require('./Language');

class Languages extends Model {}

Languages.init({
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: 'Monster',
            key: 'id'
        }
    },
    language_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: 'Language',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Languages'
});

Languages.belongsTo(Monster);
Languages.hasOne(Language, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Languages;
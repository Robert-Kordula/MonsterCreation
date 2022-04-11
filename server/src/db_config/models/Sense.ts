import { Sequelize, DataType, Model, DataTypes } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');

class Sense extends Model {}

Sense.init({
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: 'Monster',
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
}, {
    sequelize,
    modelName: 'Sense'
});

Sense.belongsTo(Monster);

module.exports = Sense;
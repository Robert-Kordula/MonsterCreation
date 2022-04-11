import { Sequelize, DataTypes, Model } from "sequelize/types";
const sequelize = new Sequelize('postgres');

const Monster = require('./Monster');

class Speed extends Model {}

Speed.init({
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: 'Monster',
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
}, {
    sequelize,
    modelName: 'Speed'
});

Speed.belongsTo(Monster);

module.exports = Speed;
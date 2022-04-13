import { Sequelize, DataTypes} from "sequelize";

// class SubType extends Model { }

// SubType.init({
//     subtype_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             len: [3, 20]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Type'
// });

module.exports = (sequelize: Sequelize) => {
    const Monster = require('./Monster');
    const SubType = sequelize.define('subtype', {
        subtype_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 20]
            }
        }
    });

    Monster.belongsTo(SubType);
    SubType.hasMany(Monster, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    return SubType;
};
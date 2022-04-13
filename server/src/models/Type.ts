import { Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('postgres:');



// class Type extends Model { }

// Type.init({
//     type_name: {
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

    const Type = sequelize.define('type', {
        type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 20]
            }
        }
    });

    Monster.belongsTo(Type);
    Type.hasMany(Monster, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    return Type;
};
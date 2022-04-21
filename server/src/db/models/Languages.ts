import { Sequelize, DataTypes } from "sequelize/types";

// class Language extends Model {}

// Language.init({
//     language_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true, 
//         validate: {
//             len: [3, 20]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Language',
//     freezeTableName: true
// });

// class Languages extends Model {}

// Languages.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     },
//     language_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Language,
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Languages'
// });

module.exports = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Language = sequelize.define('Language', {
        language_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                len: [3, 20]
            }
        }
    });

    const Languages = sequelize.define('language', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        language_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Language,
                key: 'id'
            }
        }
    });

    Monster.belongsToMany(Language, { through: Languages });
    Language.belongsToMany(Monster, { through: Languages });

    return Languages;
};
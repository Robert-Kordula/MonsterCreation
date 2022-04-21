import { Sequelize, DataTypes } from "sequelize/types";



// class Skill extends Model {}

// Skill.init({
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             len: [3, 10]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Skill'
// });

// class Skills extends Model {}

// Skills.init({
//     monster_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Monster,
//             key: 'id'
//         }
//     },
//     skill_id: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Skill,
//             key: 'id'
//         }
//     },
//     value: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Skills'
// });
exports.module = (sequelize: Sequelize) => {

    const Monster = require('./Monster');
    const Skill = sequelize.define('Skill', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 10]
            }
        }
    });

    const Skills = sequelize.define('skill', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster,
                key: 'id'
            }
        },
        skill_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Skill,
                key: 'id'
            }
        },
        value: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                min: 1,
                max: 20
            }
        }
    });

    Monster.belongsToMany(Skill, { through: Skills});
    Skill.belongsToMany(Monster, { through: Skills});

    return Skills;
}
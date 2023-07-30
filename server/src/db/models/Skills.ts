// import { Model, DataTypes, ForeignKey, Optional, InferAttributes, InferCreationAttributes, CreateDatabaseOptions, CreationOptional, Sequelize } from "sequelize";
// import Monster from "./Monster";

// interface Skill_Model extends Model<InferAttributes<Skill_Model>, InferCreationAttributes<Skill_Model>> {
//     skill_id: CreationOptional<number>;
//     name: string;
// }

// interface Skills_Model extends Model<InferAttributes<Skills_Model>, InferCreationAttributes<Skills_Model>> {
//     skill_id: ForeignKey<number>;
//     monster_id: ForeignKey<number>;
//     value?: CreationOptional<number>;
// }
// export function Skill(sequelize: Sequelize) {
//     let skill = sequelize.define<Skill_Model>('skill', {
//         skill_id: {
//             type: DataTypes.SMALLINT,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [3, 30]
//             }
//         }
//     });

//     return skill;
// }
// export default function(sequelize: Sequelize) {
//     let skills = sequelize.define<Skills_Model>('skills', {
//         skill_id: {
//             type: DataTypes.SMALLINT,
//             allowNull: false,
//             references: {
//                 model: Skill(sequelize), 
//                 key: 'id'
//             },
//             onDelete: 'CASCADE',
//             onUpdate: 'CASCADE'
//         },
//         monster_id: {
//             type: DataTypes.SMALLINT,
//             allowNull: false,
//             references: {
//                 model: Monster(sequelize), 
//                 key: 'id'
//             },
//             onDelete: 'CASCADE',
//             onUpdate: 'CASCADE'
//         },
//         value: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 len: [3, 10]
//             }
//         }
//     });
//     Monster(sequelize).belongsToMany(Skill(sequelize), { through: skills });
//     Skill(sequelize).belongsToMany(Monster(sequelize), { through: skills});
//     return skills;
// }
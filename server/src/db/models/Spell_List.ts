// import { Model, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Sequelize, CreationOptional } from "sequelize";
// import Monster from "./Monster";

// export interface Spell_Model extends Model<InferAttributes<Spell_Model>, InferCreationAttributes<Spell_Model>> {
//     id: CreationOptional<number>;
//     url: string;
// }

// export function Spell(sequelize: Sequelize) {
//     let spell = sequelize.define<Spell_Model>('spells', {
//         id: {
//             type: DataTypes.SMALLINT,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         url: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isUrl: true
//             }
//         }
//     });

//     return spell;
// }

// interface List_Model extends Model<InferAttributes<List_Model>, InferCreationAttributes<List_Model>> {
//     spell_id: ForeignKey<number>;
//     monster_id: ForeignKey<number>;
// }

// export default function (sequelize: Sequelize) {
//     let spell_list = sequelize.define<List_Model>('spell_list', {
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
//         spell_id: {
//             type: DataTypes.SMALLINT,
//             allowNull: false,
//             references: {
//                 model: Spell(sequelize), 
//                 key: 'id'
//             },
//             onDelete: 'CASCADE',
//             onUpdate: 'CASCADE'
//         }
//     });
//     Monster(sequelize).belongsToMany(Spell(sequelize), { through: spell_list});
//     Spell(sequelize).belongsToMany(Spell(sequelize), { through: spell_list});
//     return spell_list;
// }
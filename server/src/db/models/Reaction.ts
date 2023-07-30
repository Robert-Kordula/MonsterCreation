// import { Model, DataTypes, ForeignKey, Optional, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from "sequelize";
// import Monster from "./Monster";

// interface Reactions_Models extends Model<InferAttributes<Reactions_Models>, InferCreationAttributes<Reactions_Models>> {
//     id: CreationOptional<number>;
//     monster_id: ForeignKey<number>;
//     name: string;
//     desc: string;
// }

// export default function(sequelize: Sequelize) {
//     let reactions = sequelize.define<Reactions_Models>('reactions', {
//         id: {
//             type: DataTypes.SMALLINT,
//             primaryKey: true,
//             autoIncrement: true
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
//         },name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [3, 30]
//             }
//         },
//         desc: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [5, 1023]
//             }
//         }
//     });
//     Monster(sequelize).hasMany(reactions, { foreignKey: 'monster_id'});
//     return reactions;
// }
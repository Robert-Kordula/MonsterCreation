// import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
// import sequelizeConnection from "../db-config";
// import Monster from "./Monster";

// interface Special_Model extends Model<InferAttributes<Special_Model>, InferCreationAttributes<Special_Model>> {
//     id: CreationOptional<number>;
//     monster_id: ForeignKey<number>;
//     name: string;
//     desc: string;
// }

// export default function(sequelize: Sequelize) {
//     let special_abilities = sequelize.define<Special_Model>('special_abilities', {
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
//         },
//         name: {
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
//     Monster(sequelize).hasMany(special_abilities, { foreignKey: 'monster_id'});
//     return special_abilities;
// }
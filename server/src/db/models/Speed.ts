// import { Optional, Model, DataTypes, ForeignKey, ENUM, InferAttributes, InferCreationAttributes, Sequelize } from "sequelize";
// import sequelizeConnection from "../db-config";
// import Monster from "./Monster";
// import { terrains } from "../../api/dto/speed";
// export interface Speed_Model extends Model<InferAttributes<Speed_Model>, InferCreationAttributes<Speed_Model>> {
//     monster_id: ForeignKey<number>;
//     terrain: number;
//     speed: number;
// }

// export default function(sequelize: Sequelize) {
//     let speeds = sequelize.define<Speed_Model>('speeds', {
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
//         terrain: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate: {
//                 min: 0,
//                 max: 5
//             }
//         },
//         speed: {
//             type: DataTypes.SMALLINT,
//             allowNull: true,
//             validate: {
//                 customValidator(value: Number) {
//                     if (value === null && this.terrain !== 5) {
//                         throw new Error('Speed cannot be null unless it is hovering');
//                     }
//                 }
//             }
//         }
//     });
//     Monster(sequelize).hasMany(speeds, { foreignKey: 'monster_id'});
//     return speeds;
// }
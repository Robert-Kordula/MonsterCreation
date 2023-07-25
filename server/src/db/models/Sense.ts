import { Optional, DataTypes, ForeignKey, Model, InferAttributes, InferCreationAttributes, Sequelize } from "sequelize";
import Monster from "./Monster";

export interface Sense_Model extends Model<InferAttributes<Sense_Model>, InferCreationAttributes<Sense_Model>> {
    id: number;
    monster_id: ForeignKey<number>;
    sense: string;
}

export default function(sequelize: Sequelize) {
    let senses = sequelize.define<Sense_Model>('senses', {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true
        },
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }, 
        sense: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 20]
            }
        }
    });

    Monster(sequelize).hasMany(senses, { foreignKey: 'monster_id'});
    return senses;
}
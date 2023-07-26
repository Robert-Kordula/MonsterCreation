import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import connection from '../db-config';

export interface SubtypeModel extends Model<InferAttributes<SubtypeModel>, InferCreationAttributes<SubtypeModel>> {
    id: CreationOptional<number>;
    name: string;
}

export default function(sequelize: Sequelize) {
    let subtypes = sequelize.define<SubtypeModel>('subtypes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 20]
            }
        }
    });
    return subtypes;
}
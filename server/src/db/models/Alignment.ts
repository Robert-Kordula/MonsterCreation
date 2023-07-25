import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import connection from '../db-config';

export interface AlignmentModel extends Model<InferAttributes<AlignmentModel>, InferCreationAttributes<AlignmentModel>> {
    id: CreationOptional<number>;
    name: string;
}

export default function(sequelize: Sequelize) {
    let alignment = connection.define<AlignmentModel>('alignment', {
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
    return alignment;
}
import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from 'sequelize';
import connection from '../db-config';

export interface Groups_Model extends Model<InferAttributes<Groups_Model>, InferCreationAttributes<Groups_Model>> {
    id: CreationOptional<number>;
    name: string;
}

export default function (sequelize: Sequelize) {
    let groups = connection.define<Groups_Model>('groups', {
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
    return groups;
};
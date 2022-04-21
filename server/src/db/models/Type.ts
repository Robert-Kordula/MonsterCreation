import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db-config';
import { NameAttributes, NameInput } from './interfaces/nameInterfaces';

class Type extends Model<NameAttributes, NameInput> implements NameAttributes {
    public id!: number;
    public name!: string;
}

Type.init({
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
}, {
    sequelize: sequelizeConnection,
    modelName: 'Type',
    tableName: 'Types'
});

export default Type;
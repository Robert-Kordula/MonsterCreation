import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelizeConnection from '../db-config';

interface TypeModel extends Model<InferAttributes<TypeModel>, InferCreationAttributes<TypeModel>> {
    id: CreationOptional<number>;
    name: string;
}

const Type = sequelizeConnection.define<TypeModel>("types", {
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

export default Type;
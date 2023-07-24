import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelizeConnection from '../db-config';

interface AlignmentModel extends Model<InferAttributes<AlignmentModel>, InferCreationAttributes<AlignmentModel>> {
    id: CreationOptional<number>;
    name: string;
}

const Alignment = sequelizeConnection.define<AlignmentModel>('alignment', {
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

export default Alignment;
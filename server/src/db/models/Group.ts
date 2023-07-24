import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelizeConnection from '../db-config';

interface Groups_Model extends Model<InferAttributes<Groups_Model>, InferCreationAttributes<Groups_Model>> {
    id: CreationOptional<number>;
    name: string;
}
const Groups = sequelizeConnection.define<Groups_Model>('groups', {
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

export default Groups;
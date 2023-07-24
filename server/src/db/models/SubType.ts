import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelizeConnection from '../db-config';

interface SkillsModel extends Model<InferAttributes<SkillsModel>, InferCreationAttributes<SkillsModel>> {
    id: CreationOptional<number>;
    name: string;
}
const Subtype = sequelizeConnection.define('subtypes', {
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

export default Subtype;
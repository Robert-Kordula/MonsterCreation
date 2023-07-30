import { Model, DataTypes } from 'sequelize';
import connection from '../db-config';
import { Name_Attributes, NameInput } from './NameInterface'

class Group extends Model<Name_Attributes, NameInput> implements Name_Attributes {
    id!: number;
    name!: string;

}
Group.init({
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
    sequelize: connection
});

export default Group;
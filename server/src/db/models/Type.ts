import { Model, DataTypes } from 'sequelize';
import connection from '../db-config';
import { Name_Attributes, NameInput } from './NameInterface'

class Type extends Model<Name_Attributes, NameInput> implements Name_Attributes {
    public id!: number;
    public name!: string;

}
Type.init({
    id: {
        type: DataTypes.SMALLINT,
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

export default Type;
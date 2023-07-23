import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../db-config';

export default sequelizeConnection.define("types", {
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
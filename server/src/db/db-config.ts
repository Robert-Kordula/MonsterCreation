import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const dbName = process.env.DATABASE as string;
const dbUser = process.env.LOGIN as string;
const dbPassword = process.env.PASSWORD as string;
const dbHost = process.env.HOST;
const dbDialect = (process.env.DIALECT || 'postgres') as Dialect;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect
});

export default sequelizeConnection;
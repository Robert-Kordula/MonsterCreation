import { Sequelize } from 'sequelize';
import TypeModel from './models/Type';
import MonsterM from './models/Monster';
let port = parseInt(<string>process.env.DB_PORT) || 5432

const connection = new Sequelize(process.env.DB_SCHEMA || 'postgres',
process.env.DB_USER || 'postgres',
process.env.DB_PASSWORD || '',
{
    host: process.env.DB_HOST || 'localhost',
    port: port,
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.DB_SSL == "true"
    }
});

const Monster = MonsterM(connection);
const Type = TypeModel(connection);
console.log(connection);
export default connection;


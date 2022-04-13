import dotenv from 'dotenv';
dotenv.config;

module.exports = {
    HOST: process.env.HOST || 'localhost',
    USER: process.env.LOGIN || 'dnd_admin',
    PASSWORD: process.env.PASSWORD || '',
    DB: process.env.DATABASE || 'dnd_database',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
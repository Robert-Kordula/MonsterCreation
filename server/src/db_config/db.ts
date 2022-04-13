// import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'dnd_admin',
//     database: 'dnd_database',
//     password: 'lkYsfhY0UvGe',
//     port: 5432,
//     host: 'localhost',
//     max: 20,
//     idleTimeoutMillis: 30000
// });

// export { pool };

import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE || 'dnd_database', process.env.LOGIN || 'admin', process.env.PASSWORD || '', {
    host: process.env.HOST || 'localhost',
    dialect: 'postgres',
    port: 5432//parseInt(process.env.PORT || '3000')
});

console.log(process.env.LOGIN);

export { sequelize };
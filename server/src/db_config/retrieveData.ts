// import { QueryResult } from 'pg';
// import { pool } from './db';

// const tableNamesQuery = {
//     text: 'SELECT table_name FROM information_schema.tables WHERE table_schema= $1 AND table_type= $2;',
//     values: ['public', 'BASE TABLE']
// };

// const columnQuery = {
//     text: 'SELECT column_name FROM information_schema.columns WHERE table_schema= $1 AND table_name = $2;',
//     values: [] as String[]
// }

// function reduceSingleColumns(header: string, results: any[]): String[] {
//     const getValuesFromSingleColumn = (arr: String[], name: TableStrings) => {
//         arr.push(name[header]);
//         return arr;
//     };
//     let array = results.reduce(getValuesFromSingleColumn, []);
//     console.log(array);
//     return array;
// }

// // async function retrieveData() {
    

// //     const monsterQuery = {
// //         name: 'fetch-Monsters',
// //         text: 'SELECT * FROM monsters',
// //         values: []
// //     }
// //     try {
// //         const res = await pool.query(tableNamesQuery);
// //         let tableNames = reduceSingleColumns('table_name', res.rows);
// //         console.log(tableNames);
// //         const monsters = await pool.query(monsterQuery);
// //         console.log(monsters.rows);
// //     }catch (error) {
// //         console.log(error);
// //     }
// // }

// export async function getColumnNames(): Promise<String[] | Object>{
//     try {
//         let query = {...columnQuery};
//         //query.values = ['public', 'monsters'];
//         console.log(query);
//         const res = await pool.query(query);
//         let columns = reduceSingleColumns('column_name', res.rows);
//         return columns;
//     } catch (error) {
//         return error as Object;
//     }
// }

// export async function getTableNames(): Promise<String[]> {
//     try {
//         const getTableNames = (arr: String[], name: TableStrings) => {
//             arr.push(name['table_name']);
//             return arr;
//         }
//         const res = await pool.query(tableNamesQuery);
//         let tableNames:String[] = res.rows.reduce(getTableNames, []);
//         console.log(tableNames);
//         return tableNames;
//     }catch (error) {
//         return [error as String];
//     }
// }
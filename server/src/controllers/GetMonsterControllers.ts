// import { pool } from '../db_config/db';
// import { Request, Response } from 'express';
// import data from '../testMonsters.json';
// import { getTableNames } from '../db_config/retrieveData';

// class GetMonstersControllers {
//     private defaultMonsterQuery = {
//         text: 'SELECT * FROM monsters',
//         values: []
//     }

//     public async getAll (req: Request, res: Response) {
//         try {
//             const client = await pool.connect();
            
//             const { rows } = await client.query(this.defaultMonsterQuery);
            
//             client.release();

//             res.send(rows);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     }
// }

// export default GetMonstersControllers;
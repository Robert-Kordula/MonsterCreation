// import * as groupDal from '../../db/dal/group';
// import Group from '../../db/models/Group';
// import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
// import { Transaction } from 'sequelize/types';

// export const create = async (payload: NameInput | any, t: Transaction): Promise<string | null> => {
//     let result: string|never;
//     let name = payload.name
//     console.log(`Checking if ${name} exists in table Group`);
//     //Checks if monster type is passed as a string and if it already exists
//     if (typeof name === 'string') {
//         let index = await groupDal.getIDFromName(name, t);
//         result = payload.name;
//         if (index === -1) {
//             result = await groupDal.create(payload, t);
//         }
//     } else if(typeof name === 'number') {
//         result = await (await groupDal.getByID(name)).name;
//     } else if (name === null || name === '') {
//         return null;
//     }
//     else {
//         throw new Error('Invalid format for Group');
//     }
//     console.log(result);
//     return result;
// }

// export const getAll = (): Promise<NameOutput[]> => {
//     return groupDal.getAll();
// }

// export const getByID = (id: number): Promise<NameOutput> => {
//     return groupDal.getByID(id);
// }

// export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
//     return groupDal.getIDFromName(name, t);
// }
// import * as subtypeDal from '../../db/dal/subtype';
// import SubType from '../../db/models/SubType';
// import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
// import { CreateNameDTO } from '../dto/name';

// export const create = async (payload: CreateNameDTO | any): Promise<string | null> => {
//     let result: string|never;
//     let name = payload.name;
//     console.log(`Checking if ${name} exists in table SubType`);
//     //Checks if monster subtype is passed as a string and if it already exists
//     if (typeof name === 'string') {
//         let index = await subtypeDal.getIDFromName(name);
//         result = payload.name;
//         if (index === -1) {
//             result = await subtypeDal.create(payload);
//         }
//     } else if(typeof name === 'number') {
//         result = await (await subtypeDal.getByID(name)).name;
//     } else if (name === null || name === '') {
//         return null;
//     }
//     else {
//         throw new Error('Invalid format for SubType');
//     }
//     console.log(result);
//     return result;
// }

// export const getAll = (): Promise<NameOutput[]> => {
//     return subtypeDal.getAll();
// }

// export const getByID = (id: number): Promise<NameOutput> => {
//     return subtypeDal.getByID(id);
// }

// export const getIDFromName = (name: string): Promise<number> => {
//     return subtypeDal.getIDFromName(name);
// }
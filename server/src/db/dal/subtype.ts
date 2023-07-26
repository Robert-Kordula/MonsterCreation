// import { InferCreationAttributes } from 'sequelize';
// import SubType, { SubtypeModel } from '../models/SubType';

// export const create = async (payload: InferCreationAttributes<SubtypeModel>): Promise<SubtypeModel> => {
//     const subtype = await SubType.create(payload);
//     return subtype;
// }

// export const getAll = async (): Promise<SubtypeModel[]> => {
//     return SubType.findAll();
// }

// export const getByID = async (id: number): Promise<SubtypeModel> => {
//     const subtype = await SubType.findByPk(id);
//     if (!subtype) {
//         throw new Error('not found');
//     }
//     return subtype;
// }

// export const getIDFromName = async (name: string): Promise<number> => {
//     const id = await SubType.findAll({
//         attributes: ['id'],
//         where: {
//             name: name
//         }
//     });
//     try {
//         console.log(`${name} exists with ID: ${id[0].id}`);
//         return id[0].id;
//     } catch {
//         console.log(`${name} does not exist`);
//         return -1;
//     }
// }
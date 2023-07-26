// import { InferCreationAttributes } from 'sequelize';
// import Type, { TypeModel } from '../models/Type';

// export const create = async (payload: InferCreationAttributes<TypeModel>): Promise<TypeModel> => {
//     const type = await Type.create(payload);
//     return type;
// }

// export const getAll = async (): Promise<TypeModel[]> => {
//     return Type.findAll();
// }

// export const getByID = async (id: number): Promise<TypeModel> => {
//     const type = await Type.findByPk(id);
//     if (!type) {
//         throw new Error('not found');
//     }
//     return type;
// }

// export const getIDFromName = async (payload: string): Promise<number> => {
//     const id = await Type.findAll({
//         attributes: ['id'],
//         where: {
//             name: payload
//         }
//     });
//     try {
//         console.log(`${payload} exists with ID: ${id[0].id}`);
//         return id[0].id;
//     } catch {
//         console.log(`${payload} does not exist`);
//         return -1;
//     }
// }
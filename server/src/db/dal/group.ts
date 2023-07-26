// import { InferCreationAttributes } from 'sequelize';
// import Group, { Groups_Model } from '../models/Group';

// export const create = async (payload: InferCreationAttributes<Groups_Model>): Promise<Groups_Model> => {
//     const group = await Group.create(payload);
//     return group;
// }

// export const getAll = async (): Promise<Groups_Model[]> => {
//     return Group.findAll();
// }

// export const getByID = async (id: number): Promise<Groups_Model> => {
//     const group = await Group.findByPk(id);
//     if (!group) {
//         throw new Error('not found');
//     }
//     return group;
// }

// export const getIDFromName = async (name: string): Promise<number> => {
//     const id = await Group.findAll({
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
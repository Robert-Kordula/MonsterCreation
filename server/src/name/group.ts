// import * as service from '../api/services/groupService';
// import { CreateNameDTO, UpdateNameDTO } from '../api/dto/name';
// import { Name } from '../api/interfaces';
// import * as mapper from './nameMapper';

// export const create = async (payload: CreateNameDTO): Promise<string | null> => {
//     return await service.create(payload);
// }

// export const getAll = async() => {
//     return (await service.getAll()).map(mapper.toName);
// }

// export const getByID = async (id: number): Promise<Name> => {
//     return mapper.toName(await service.getByID(id));
// }

// export const getIDFromName = async (name: string): Promise<number> => {
//     return await service.getIDFromName(name);
// }
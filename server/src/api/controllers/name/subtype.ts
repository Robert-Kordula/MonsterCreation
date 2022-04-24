import * as service from '../../services/subtypeService';
import { CreateNameDTO, UpdateNameDTO } from '../../dto/name';
import { Name } from '../../interfaces';
import * as mapper from './nameMapper';
import { Transaction } from 'sequelize/types';

export const create = async (payload: CreateNameDTO, t: Transaction): Promise<string | null> => {
    return await service.create(payload, t);
}

export const getAll = async() => {
    return (await service.getAll()).map(mapper.toName);
}

export const getByID = async (id: number): Promise<Name> => {
    return mapper.toName(await service.getByID(id));
}

export const getIDFromName = async (name: string, t: Transaction): Promise<number> => {
    return await service.getIDFromName(name, t);
}
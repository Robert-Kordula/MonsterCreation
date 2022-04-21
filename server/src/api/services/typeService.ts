import * as typeDal from '../../db/dal/type';
import Type from '../../db/models/Type';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = (payload: NameInput, t: Transaction): Promise<number> => {
    return typeDal.create(payload, t);
}

export const getAll = (): Promise<NameOutput[]> => {
    return typeDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return typeDal.getById(id);
}

export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
    return typeDal.getIDFromName(name, t);
}
import * as groupDal from '../../db/dal/group';
import Group from '../../db/models/Group';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = (payload: NameInput, t: Transaction): Promise<number> => {
    return groupDal.create(payload, t);
}

export const getAll = (): Promise<NameOutput[]> => {
    return groupDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return groupDal.getById(id);
}

export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
    return groupDal.getIDFromName(name, t);
}
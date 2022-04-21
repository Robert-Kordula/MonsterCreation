import * as subtypeDal from '../../db/dal/subtype';
import SubType from '../../db/models/SubType';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = (payload: NameInput, t: Transaction): Promise<number> => {
    return subtypeDal.create(payload, t);
}

export const getAll = (): Promise<NameOutput[]> => {
    return subtypeDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return subtypeDal.getById(id);
}

export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
    return subtypeDal.getIDFromName(name, t);
}
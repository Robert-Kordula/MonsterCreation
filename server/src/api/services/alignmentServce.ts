import * as alignmentDal from '../../db/dal/alignment';
import Alignment from '../../db/models/Alignment';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = (payload: NameInput, t: Transaction): Promise<number> => {
    return alignmentDal.create(payload, t);
}

export const getAll = (): Promise<NameOutput[]> => {
    return alignmentDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return alignmentDal.getById(id);
}

export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
    return alignmentDal.getIDFromName(name, t);
}
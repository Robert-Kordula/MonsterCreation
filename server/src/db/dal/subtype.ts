import SubType from '../models/SubType';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = async (payload: NameInput, t: Transaction): Promise<number> => {
    const subtype = await SubType.create(payload, {transaction: t});
    return subtype.id;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return SubType.findAll();
}

export const getById = async (id: number): Promise<NameOutput> => {
    const subtype = await SubType.findByPk(id);
    if (!subtype) {
        throw new Error('not found');
    }
    return subtype;
}

export const getIDFromName = async (name: string, t: Transaction): Promise<number> => {
    const id = await SubType.findAll({
        attributes: ['id'],
        where: {
            name: name
        }
    });
    try {
        console.log(`${name} exists with ID: ${id[0].id}`);
        return id[0].id;
    } catch {
        console.log(`${name} does not exist`);
        return -1;
    }
}
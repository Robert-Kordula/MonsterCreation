import SubType from '../models/SubType';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = async (payload: NameInput, t: Transaction): Promise<string> => {
    const subtype = await SubType.create(payload, {transaction: t});
    return subtype.name;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return SubType.findAll();
}

export const getByID = async (id: number, t: Transaction): Promise<NameOutput> => {
    const subtype = await SubType.findByPk(id, {transaction: t});
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
        },
        transaction: t
    });
    try {
        console.log(`${name} exists with ID: ${id[0].id}`);
        return id[0].id;
    } catch {
        console.log(`${name} does not exist`);
        return -1;
    }
}
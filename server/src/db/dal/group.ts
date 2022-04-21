import Group from '../models/Group';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = async (payload: NameInput, t: Transaction): Promise<number> => {
    const group = await Group.create(payload, {transaction: t});
    return group.id;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return Group.findAll();
}

export const getById = async (id: number): Promise<NameOutput> => {
    const group = await Group.findByPk(id);
    if (!group) {
        throw new Error('not found');
    }
    return group;
}

export const getIDFromName = async (name: string, t: Transaction): Promise<number> => {
    const id = await Group.findAll({
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
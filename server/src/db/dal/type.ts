import Type from '../models/Type';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';
import monsterRouter from '../../api/routers/monsterRouter';
import { Transaction } from 'sequelize/types';
import { Json } from 'sequelize/types/utils';

export const create = async (payload: NameInput, t: Transaction): Promise<number> => {
    const type = await Type.create(payload, {transaction: t});
    return type.id;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return Type.findAll();
}

export const getById = async (id: number): Promise<NameOutput> => {
    const type = await Type.findByPk(id);
    if (!type) {
        throw new Error('not found');
    }
    return type;
}

export const getIDFromName = async (name: string, t: Transaction): Promise<number> => {
    const id = await Type.findAll({
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
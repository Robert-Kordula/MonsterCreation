import Type from '../models/Type';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';
import monsterRouter from '../../api/routers/monsterRouter';
import { Transaction } from 'sequelize/types';

export const create = async (payload: NameInput, t: Transaction): Promise<string> => {
    const type = await Type.create(payload, {transaction: t});
    return type.name;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return Type.findAll();
}

export const getByID = async (id: number): Promise<NameOutput> => {
    const type = await Type.findByPk(id);
    if (!type) {
        throw new Error('not found');
    }
    return type;
}

export const getIDFromName = async (payload: string, t: Transaction): Promise<number> => {
    const id = await Type.findAll({
        attributes: ['id'],
        where: {
            name: payload
        }
    });
    try {
        console.log(`${payload} exists with ID: ${id[0].id}`);
        return id[0].id;
    } catch {
        console.log(`${payload} does not exist`);
        return -1;
    }
}
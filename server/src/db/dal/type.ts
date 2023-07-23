import Type from '../models/Type';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';

export const create = async (payload: NameInput): Promise<string> => {
    const type = await Type.create(payload);
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

export const getIDFromName = async (payload: string): Promise<number> => {
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
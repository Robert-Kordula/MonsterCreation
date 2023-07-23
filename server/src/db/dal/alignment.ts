import Alignment from '../models/Alignment';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';

export const create = async (payload: NameInput): Promise<string> => {
    const alignment = await Alignment.create(payload);
    return alignment.name;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return Alignment.findAll();
}

export const getByID = async (id: number): Promise<NameOutput> => {
    const alignment = await Alignment.findByPk(id);
    if (!alignment) {
        throw new Error('not found');
    }
    return alignment;
}

export const getIDFromName = async (name: string): Promise<number> => {
    const id = await Alignment.findAll({
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
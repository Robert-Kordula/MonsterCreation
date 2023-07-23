import Group from '../models/Group';
import { NameInput, NameOutput } from '../models/interfaces/nameInterfaces';

export const create = async (payload: NameInput): Promise<string> => {
    const group = await Group.create(payload);
    return group.name;
}

export const getAll = async (): Promise<NameOutput[]> => {
    return Group.findAll();
}

export const getByID = async (id: number): Promise<NameOutput> => {
    const group = await Group.findByPk(id);
    if (!group) {
        throw new Error('not found');
    }
    return group;
}

export const getIDFromName = async (name: string): Promise<number> => {
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
import { InferCreationAttributes } from 'sequelize';
import Type, { TypeModel } from '../models/Type'
import connection from '../db-config';

const create = async (payload: InferCreationAttributes<TypeModel>): Promise<TypeModel> => {
    const type = await Type(connection).create(payload);
    return type;
}

const getAll = async (): Promise<TypeModel[]> => {
    return Type(connection).findAll();
}

const getByID = async (id: number): Promise<TypeModel> => {
    const type = await Type(connection).findByPk(id);
    if (!type) {
        throw new Error('not found');
    }
    return type;
}

const getIDsFromName = async (name: string): Promise<TypeModel[] | null> => {
    let type = await Type(connection).findAll({
        attributes: ['id'],
        where: {
            name: name
        }
    });
    try {
        console.log(`${name} exists with ID: ${type}`);
        return type;
    } catch {
        console.log(`${name} does not exist`);
        return null;
    }
}

export default { create, getAll, getByID, getIDsFromName};
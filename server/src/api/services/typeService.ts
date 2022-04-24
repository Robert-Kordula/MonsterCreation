import * as typeDal from '../../db/dal/type';
import Type from '../../db/models/Type';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';
import { CreateNameDTO } from '../dto/name';

export const create = async (payload: CreateNameDTO | any, t: Transaction): Promise<string> => {
    let result: string|never;
    let name = payload.name
    console.log(`Checking if ${name} exists in table Type`);
    //Checks if monster type is passed as a string and if it already exists
    if (typeof name === 'string') {
        let index = await typeDal.getIDFromName(name, t);
        result = payload.name;
        if (index === -1) {
            result = await typeDal.create(payload, t);
        }
    } else if(typeof name === 'number') {
        result = await (await typeDal.getByID(name)).name;
    } else if (name === null || name === '') {
        throw new Error('Type cannot be null or empty');
    }
    else {
        throw new Error('Invalid format for Type');
    }
    console.log(result);
    return result;
}

export const getAll = (): Promise<NameOutput[]> => {
    return typeDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return typeDal.getByID(id);
}

export const getIDFromName = (payload: NameInput, t: Transaction): Promise<number> => {
    return typeDal.getIDFromName(payload.name, t);
}
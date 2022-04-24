import * as alignmentDal from '../../db/dal/alignment';
import { NameInput, NameOutput } from '../../db/models/interfaces/nameInterfaces';
import { Transaction } from 'sequelize/types';

export const create = async (payload: NameInput, t: Transaction): Promise<string> => {
    let result: string|never;
    let name = payload.name
    console.log(`Checking if ${name} exists in table Type`);
    //Checks if monster type is passed as a string and if it already exists
    if (typeof name === 'string') {
        let index = await alignmentDal.getIDFromName(name, t);
        result = payload.name;
        if (index === -1) {
            result = await alignmentDal.create(payload, t);
        }
    } else if(typeof name === 'number') {
        result = await (await alignmentDal.getByID(name)).name;
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
    return alignmentDal.getAll();
}

export const getByID = (id: number): Promise<NameOutput> => {
    return alignmentDal.getByID(id);
}

export const getIDFromName = (name: string, t: Transaction): Promise<number> => {
    return alignmentDal.getIDFromName(name, t);
}
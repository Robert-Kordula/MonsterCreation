import { Transaction } from 'sequelize/types';
import * as subtypeController from '../../controllers/name/subtype';

exports.createType = async (type: any, t: Transaction): Promise<number | never> => {
    let result: number|never;
    if (typeof type === 'string') {
        result = await subtypeController.getIDFromName(type, t);
        if (result === -1) {
            result = await subtypeController.create({name: type}, t);
        }
    } else if(typeof type === 'number') {
        await subtypeController.getByID(type);
        result = type;
    } else if (type === null || (type as string).length === 0) {
        throw new Error('Type cannot be null or empty');
    }
    else {
        throw new Error('Invalid format for Type');
    }
    console.log(result);
    return result;
};
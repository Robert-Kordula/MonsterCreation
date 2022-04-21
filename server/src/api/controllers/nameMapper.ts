import { Name } from '../interfaces';
import { NameOutput } from '../../db/models/interfaces/nameInterfaces';

export const toName = (name: NameOutput): Name => {
    return {
        id: name.id,
        name: name.name
    }
}
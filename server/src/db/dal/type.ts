import Type from '../models/Type';
import { NameInput } from '../models/NameInterface';

const create = async (payload: NameInput): Promise<Type> => {
    return await Type.create(payload);
}

const getAll = async (): Promise<Type[]> => {
    return Type.findAll();
}

const getByID = async (id: number): Promise<Type | null> => {
    return Type.findByPk(id);
}

const getIDsFromName = async (name: string): Promise<Type[] | null> => {
    return Type.findAll({
        attributes: ['id'],
        where: {
            name: name
        }
    });
}

const deleteType = async(id: number): Promise<number> => {
    try {
        let rowsDestroyed = await Type.destroy({
            where: {
                id: id
            }
        });
        if (rowsDestroyed === 1) console.log('Deleted Successfully');
        else console.log(`Type with ID ${id} does not exist`);
        return rowsDestroyed;

    } catch (err) {
        console.log(err);
        return -1;
    }
}

export default { create, getAll, getByID, getIDsFromName, deleteType};
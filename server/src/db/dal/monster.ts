import Monster, { MonsterInput, MonsterOutput } from '../models/Monster';

const create = async (payload: MonsterInput): Promise<Monster> => {
    return await Monster.create(payload);
}

const getAll = async (): Promise<Monster[]> => {
    return await Monster.findAll();
}

const findByID = async (id: number): Promise<Monster | null> => {
    return await Monster.findByPk(id);
};

const deleteMonster = async(id: number):Promise<number> => {
    try {
        let rowsDestroyed = await Monster.destroy({
            where: {
                id: id
            }
        });
        if (rowsDestroyed === 1) console.log('Deleted Successfully');
        else console.log(`Monster with ID ${id} does not exist`);

        return rowsDestroyed;

    } catch (err) {
        console.log(err);
        return -1;
    }
}

export default { create, getAll, findByID, deleteMonster };
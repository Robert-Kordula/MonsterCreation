import Monster from '../models/Monster';
import { MonsterInput, MonsterOutput } from '../models/Monster';

export const create = async (payload: MonsterInput): Promise<MonsterOutput> => {
    const monster = await Monster.create(payload);
    return monster;
}

export const getAll = async (): Promise<MonsterOutput[]> => {
    return await Monster.findAll();
}

export const findByID = async (id: number): Promise<MonsterOutput | null> => {
    return await Monster.findByPk(id);
};

export const deleteMonster = async(id: number):Promise<number> => {
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
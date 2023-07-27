import { InferCreationAttributes } from 'sequelize';
import Monster, { Monster_Model } from '../models/Monster';
import dbConnection from '../db-config';

let monster_table = Monster(dbConnection);
const create = async (payload: InferCreationAttributes<Monster_Model>): Promise<Monster_Model> => {
    const monster = await monster_table.create(payload);
    return monster;
}

const getAll = async (): Promise<Monster_Model[]> => {
    return await monster_table.findAll();
}

const findByID = async (id: number): Promise<Monster_Model | null> => {
    return await monster_table.findByPk(id);
};

const deleteMonster = async(id: number):Promise<number> => {
    try {
        let rowsDestroyed = await monster_table.destroy({
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
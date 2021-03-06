import { Transaction } from 'sequelize';
import Monster from '../models/Monster';
import { MonsterInput, MonsterOutput } from '../models/Monster';

export const create = async (payload: MonsterInput, t: Transaction): Promise<MonsterOutput> => {
    const monster = await Monster.create(payload, {transaction: t});
    return monster;
}

export const getAll = async (): Promise<MonsterOutput[]> => {
    return await Monster.findAll();
}
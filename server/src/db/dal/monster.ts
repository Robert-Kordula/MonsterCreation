import { Op, InferCreationAttributes } from 'sequelize';
import Monster from '../models/Monster';
import { MonsterInput, MonsterOutput } from '../models/Monster';

export const create = async (payload: MonsterInput): Promise<MonsterOutput> => {
    const monster = await Monster.create(payload);
    return monster;
}

export const getAll = async (): Promise<MonsterOutput[]> => {
    return Monster.findAll();
}
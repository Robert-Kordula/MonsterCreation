import { Transaction } from 'sequelize/types';
import * as monsterDal from '../../db/dal/monster';
import Monster, { MonsterInput, MonsterOutput } from '../../db/models/Monster';

export const create = (payload: MonsterInput, t: Transaction): Promise<MonsterOutput> => {
    return monsterDal.create(payload, t);
}

export const getAll = (): Promise<MonsterOutput[]> => {
    return monsterDal.getAll();
}
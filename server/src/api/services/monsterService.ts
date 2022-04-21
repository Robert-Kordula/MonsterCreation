import * as monsterDal from '../../db/dal/monster';
import Monster, { MonsterInput, MonsterOutput } from '../../db/models/Monster';

export const create = (payload: MonsterInput): Promise<MonsterOutput> => {
    return monsterDal.create(payload);
}

export const getAll = (): Promise<MonsterOutput[]> => {
    return monsterDal.getAll();
}
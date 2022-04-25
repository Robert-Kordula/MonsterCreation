import * as service from '../../services/monsterService';
import { CreateMonsterDTO, UpdateMonsterDTO } from '../../dto/monster';
import { Monster } from '../../interfaces';
import * as mapper from './mapper';
import { Transaction } from 'sequelize/types';

export const create = async (payload: CreateMonsterDTO, t: Transaction): Promise<Monster> => {
    return mapper.toMonster(await service.create(payload, t));
};

export const getAll = async() => {
    return (await service.getAll()).map(mapper.toMonster);
}
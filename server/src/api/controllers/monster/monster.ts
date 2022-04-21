import * as service from '../../services/monsterService';
import { CreateMonsterDTO, UpdateMonsterDTO } from '../../dto/monster';
import { Monster } from '../../interfaces';
import * as mapper from './mapper';

export const create = async (payload: CreateMonsterDTO): Promise<Monster> => {
    return mapper.toMonster(await service.create(payload));
};

export const getAll = async() => {
    return (await service.getAll()).map(mapper.toMonster);
}

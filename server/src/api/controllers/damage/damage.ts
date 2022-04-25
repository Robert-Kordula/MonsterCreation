import { Transaction } from "sequelize/types";
import { DamageInput } from "../../../db/models/Damage_Type";
import { Damage_Immunity, Damage_Resistance, Damage_Vulnerability } from "../../../db/models";
import * as service from '../../services/damageService';
import * as mapper from './mapper';

export const createMultiple = async (payload: (string|number)[], id: number, t: Transaction, model: string): Promise<string[]> => {
    return mapper.toDamages(await service.createMultiple(payload, id, t, model));
}
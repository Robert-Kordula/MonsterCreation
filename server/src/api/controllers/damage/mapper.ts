import { DamageOutput } from "../../../db/models/Damage_Type";
import * as dmgServices from '../../services/damageService';
import { NameOutput } from "../../../db/models/interfaces/nameInterfaces";
import { Transaction } from "sequelize/types";

export const toDamages = async (payload: DamageOutput[], t: Transaction): Promise<string[]> => {
    let results = [];
    for (let i = 0; i < payload.length; i++) {
        let dmg = await dmgServices.getByID(payload[i].damage_id, t);
        if (dmg === null) {
            throw new Error('Damage type does not exist in table');
        }
        results.push(dmg.name);
    }
    return results;
}
import { Transaction } from "sequelize/types";
import { DamageInput, DamageOutput } from "../../db/models/Damage_Type";
import * as dmgDal from '../../db/dal/damage';
import { NameOutput } from "../../db/models/interfaces/nameInterfaces";

// export const create = async (payload: DamageInput, t: Transaction): Promise<DamageOutput> => {
//     return dmgVulDal.create(payload, t);
// }

export const createMultiple = async (payload: (string|number)[], id: number, t: Transaction, model: string): Promise<DamageOutput[]> => {

    let results = [];
    for (let i = 0; i < payload.length; i++) {
        let damage_id: string|number = payload[i];
        if (typeof damage_id === 'string') {
            let damage = await dmgDal.getIDFromName(damage_id, t);
            if (damage === -1) {
                console.log(`Adding new damage type ${payload[i]}`)
                damage_id = await (await dmgDal.createDamage(damage_id, t)).id;
            }
        } else if (typeof damage_id === 'number') {
            let damage = await dmgDal.getByID(damage_id, t);
            if (!damage) {
                console.log(`ID: ${damage_id} does not exist`);
                throw new Error('Invalid ID for damage_type');
            }
            console.log(`ID: ${damage_id} does exist`);
        }

        results.push({monster_id: id, damage_id: damage_id as number});
    }
    return results;
}



import { DamageInput, DamageOutput } from "../models/Damage_Type";
import { Damage_Vulnerability } from "../models";

export const create = async (payload: DamageInput): Promise<DamageOutput> => {
    const dmg_vul = await Damage_Vulnerability.create(payload);
    return dmg_vul;
}
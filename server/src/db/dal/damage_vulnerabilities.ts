import { Transaction } from "sequelize/types";
import { DamageInput, DamageOutput } from "../models/Damage_Type";
import { Damage_Vulnerability } from "../models";

export const create = async (payload: DamageInput, t: Transaction): Promise<DamageOutput> => {
    const dmg_vul = await Damage_Vulnerability.create(payload, {transaction: t});
    return dmg_vul;
}
import { Transaction } from "sequelize/types";
import { Damage_Immunity, Damage_Resistance, Damage_Vulnerability, Damage_Type } from "../models";
import { DamageOutput } from "../models/Damage_Type";
import { NameInput, NameOutput } from "../models/interfaces/nameInterfaces";

export const createDamage = async (payload: string, t:Transaction): Promise<NameOutput> => {
    return await Damage_Type.create({name: payload}, {transaction: t});
}

export const getIDFromName = async (payload: string, t:Transaction): Promise<number> => {
    try {
        let id = (await Damage_Type.findAll({
            attributes: ['id'],
            where: {
                name: payload
            },
            transaction: t
        }))[0].id;
        return id;
    } catch (error) {
        console.log(`${payload} does not exist in table`);
        return -1;
    }
}

export const getByID = async (id: number, t: Transaction): Promise<NameOutput|null> => {
    const damage = await Damage_Type.findByPk(id, {transaction: t});
    if (!damage) {
        return null;
    }
    return damage;
}
import { Transaction } from "sequelize/types";
import { Damage_Immunity, Damage_Resistance, Damage_Vulnerability, Damage_Type } from "../models";
import { DamageInput, DamageOutput } from "../models/Damage_Type";
import { NameInput, NameOutput } from "../models/interfaces/nameInterfaces";

export const createDamage = async (payload: string, t:Transaction): Promise<NameOutput> => {
    console.log(`Adding new damage type ${payload}`);
    return await Damage_Type.create({name: payload}, {transaction: t});
}

export const addToMonster = async(payload: DamageInput, t: Transaction, model: string): Promise<DamageOutput> => {

    switch(model) {
        case('vul'): {
            return await Damage_Vulnerability.create(payload, {transaction: t});
        }
        default: {
            throw new Error('Error inserting into Damage Tables');
        }
    }
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
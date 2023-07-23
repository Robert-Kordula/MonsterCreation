// import { Transaction } from "sequelize/types";
// import { DamageInput, DamageOutput } from "../../db/models/Damage_Type";
// import * as dmgDal from '../../db/dal/damage';
// import { NameOutput } from "../../db/models/interfaces/nameInterfaces";

// // export const addToMonster = async (monster_id: number, damage: string|number, t: Transaction, model: string): Promise<DamageOutput> => {
// //     let damage_id: number;
// //     if (typeof damage === 'string') {

// //     }
// //     return await dmgDal.addToMonster({monster_id: monster_id, damage_id: damage_id}, t, model);

// // };

// export const addMultiple = async (payload: (string|number)[], id: number, t: Transaction, model: string): Promise<DamageOutput[]> => {

//     let results = [];
//     for (let i = 0; i < payload.length; i++) {
//         let damage_id = await determineID(payload[i], t);
//         // if (typeof damage === 'string') {
//         //     damage_id = await dmgDal.getIDFromName(damage, t);
//         //     if (damage_id === -1) {
//         //         console.log(`Adding new damage type ${payload[i]}`)
//         //         damage_id = await (await dmgDal.createDamage(damage, t)).id;
//         //     }
//         // } else if (typeof damage === 'number') {
//         //     let dmg = await dmgDal.getByID(damage, t);
//         //     if (!dmg) {
//         //         console.log(`ID: ${damage} does not exist`);
//         //         throw new Error('Invalid ID for damage_type');
//         //     }
//         //     damage_id = damage;
//         //     console.log(`ID: ${damage} does exist`);
//         // } else {
//         //     throw new Error('invalid type');
//         // }
//         console.log(damage_id);
//         results.push({monster_id: id, damage_id: damage_id});
//         console.log(results);
//     }
//     return results;
// }

// export const getByID= async(payload: number, t: Transaction): Promise<NameOutput|null> => {
//     return await dmgDal.getByID(payload, t);
// }

// async function determineID(id: string|number, t: Transaction): Promise<number> {
//     let damage_id:number;
//     if (typeof id === 'string') {
//         damage_id = await dmgDal.getIDFromName(id, t);
//         if (damage_id === -1) {
//             damage_id = await (await dmgDal.createDamage(id, t)).id;
//         }
//     } else if (typeof id === 'number') {
//         let dmg = await dmgDal.getByID(id, t);
//         if (!dmg) {
//             console.log(`ID: ${id} does not exist`);
//             throw new Error('Invalid ID for damage_type');
//         }
//         damage_id = id;
//         console.log(`ID: ${id} does exist`);
//     } else {
//         throw new Error('invalid type');
//     }

//     return damage_id;
// }

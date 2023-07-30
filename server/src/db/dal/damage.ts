// import Damage from "../models/Damage_Type";
//
// export const createDamage = async (payload: string): Promise<NameOutput> => {
//     console.log(`Adding new damage type ${payload}`);
//     return await Damage_Type.create({name: payload});
// }

// export const addToMonster = async(payload: DamageInput, model: string): Promise<DamageOutput> => {

//     switch(model) {
//         case('vul'): {
//             return await Damage_Vulnerability.create(payload,);
//         }
//         default: {
//             throw new Error('Error inserting into Damage Tables');
//         }
//     }
// }

// export const getIDFromName = async (payload: string): Promise<number> => {
//     try {
//         let id = (await Damage_Type.findAll({
//             attributes: ['id'],
//             where: {
//                 name: payload
//             }
//         }))[0].id;
//         return id;
//     } catch (error) {
//         console.log(`${payload} does not exist in table`);
//         return -1;
//     }
// }

// export const getByID = async (id: number): Promise<NameOutput|null> => {
//     const damage = await Damage_Type.findByPk(id,);
//     if (!damage) {
//         return null;
//     }
//     return damage;
// }
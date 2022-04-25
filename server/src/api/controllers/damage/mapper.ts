import { DamageOutput } from "../../../db/models/Damage_Type";
import { NameOutput } from "../../../db/models/interfaces/nameInterfaces";

export const toDamages = (payload: NameOutput[]): string[] => {
    return payload.map((dmg) => dmg.name);
}
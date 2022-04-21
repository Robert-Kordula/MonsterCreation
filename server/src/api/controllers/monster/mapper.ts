import { Monster } from "../../interfaces";
import { MonsterOutput } from "../../../db/models/Monster";

export const toMonster = (monster: MonsterOutput): Monster => {
    return {
        id: monster.id,
        name: monster.name,
        size: monster.size,
        type: monster.type,
        subtype: monster.subtype,
        group: monster.group,
        alignment: monster.alignment,
        armor_class: monster.armor_class,
        armor_desc: monster.armor_desc,
        hit_points: monster.hit_points,
        hit_dice: monster.hit_dice,
        strength: monster.strength,
        dexterity: monster.dexterity,
        constitution: monster.constitution,
        intelligence: monster.intelligence,
        wisdom: monster.wisdom,
        charisma: monster.charisma,
        perception: monster.perception,
        challenge_rating: monster.challenge_rating,
        strength_save: monster.strength_save,
        dexterity_save: monster.dexterity_save,
        intelligence_save: monster.intelligence_save,
        wisdom_save: monster.wisdom_save,
        charisma_save: monster.charisma_save,
        legendary_desc: monster.legendary_desc
    }
}
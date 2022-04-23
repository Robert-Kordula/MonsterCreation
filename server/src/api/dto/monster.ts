import { Optional } from "sequelize/types";

export type CreateMonsterDTO = {
    name: string;
    size: number;
    armor_class: number;
    armor_desc: string;
    hit_points: number;
    hit_dice: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    perception: number;
    challenge_rating: number;
    strength_save: number;
    dexterity_save: number;
    intelligence_save: number;
    wisdom_save: number;
    charisma_save: number;
    legendary_desc: string;
}

export type UpdateMonsterDTO = Optional<CreateMonsterDTO, 'name'>
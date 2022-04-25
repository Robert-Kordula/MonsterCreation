import { Optional } from "sequelize/types";

export type CreateDamageDTO = {
    monster_id: number;
    damage_id: number;
}

export type UpdateDamageDTO = Optional<CreateDamageDTO, 'monster_id'>
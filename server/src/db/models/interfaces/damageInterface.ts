import { ForeignKey, Optional } from "sequelize/types";

export interface DamageAttributes {
    monster_id: ForeignKey<number>;
    damage_id: ForeignKey<number>;
}

export interface DamageInput extends Optional<DamageAttributes, 'damage_id'> {}
export interface DamageOutput extends Required<DamageAttributes> {}
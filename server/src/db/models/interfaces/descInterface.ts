import { Optional, ForeignKey } from "sequelize/types";

export interface DescAttributes {
    id: number;
    monster_id: ForeignKey<number>;
    name: string;
    desc: string;
}

export interface DescInput extends Optional<DescAttributes, 'id'> {}
export interface DescOutput extends Required<DescAttributes> {}
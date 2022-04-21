import { Optional } from "sequelize/types";

export interface NameAttributes {
    id: number;
    name: string;
}

export interface NameInput extends Optional<NameAttributes, 'id'> {}
export interface NameOutput extends Required<NameAttributes> {}
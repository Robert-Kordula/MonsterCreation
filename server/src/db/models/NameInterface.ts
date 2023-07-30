import { Optional } from "sequelize";

export interface Name_Attributes {
    id: number;
    name: string;
}

export interface NameInput extends Optional<Name_Attributes, 'id'> {};
export interface NameOutput extends Required<Name_Attributes> {};
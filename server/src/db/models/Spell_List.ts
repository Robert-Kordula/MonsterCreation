import { Optional, Model, DataTypes, ForeignKey } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";
import Spell from './Spell';
export interface ListAttributes {
    spell_id: ForeignKey<number>;
    monster_id: ForeignKey<number>;
}

export interface ListInput extends Optional<ListAttributes, 'spell_id'> {}
export interface ListOutput extends Required<ListAttributes> {}

const Spell_List = sequelizeConnection.define('spell_list', {});

Monster.belongsToMany(Spell, {
    through: Spell_List,
    foreignKey: 'spell_id'
});
Spell.belongsToMany(Monster, {
    through: Spell_List,
    foreignKey: 'monster_id'
});

export default Spell_List;
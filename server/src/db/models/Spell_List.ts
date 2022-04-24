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

class Spell_List extends Model<ListAttributes, ListInput> implements ListAttributes {
    public spell_id!: ForeignKey<number>;
    public monster_id!: ForeignKey<number>;
}

Spell_List.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Spell_List',
    tableName: 'Spell_List'
});

Monster.belongsToMany(Spell, {
    through: Spell_List,
    foreignKey: 'spell_id'
});
Spell.belongsToMany(Monster, {
    through: Spell_List,
    foreignKey: 'monster_id'
});

export default Spell_List;
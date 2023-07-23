import { DataTypes, Model, ForeignKey, Optional } from "sequelize";
import sequelizeConnection from "../db-config";
import { NameAttributes, NameInput } from "./interfaces/nameInterfaces";

import Monster from "./Monster";

export interface DamageAttributes {
    monster_id: ForeignKey<number>;
    damage_id: ForeignKey<number>;
}

export interface DamageInput extends Optional<DamageAttributes, 'damage_id'> {}
export interface DamageOutput extends Required<DamageAttributes> {}
const Damage_Types = sequelizeConnection.define('damage_types', {
    id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 40]
        }
    }
});

const Damage_Resistance = sequelizeConnection.define('damage_resistances', {});

const Damage_Immunity = sequelizeConnection.define('damage_immunities', {});

const Damage_Vulnerability = sequelizeConnection.define('damage_vulnerabilities', {});

Monster.belongsToMany(Damage_Types, {
    through: Damage_Resistance,
    foreignKey: 'damage_id'
});
Damage_Types.belongsToMany(Monster, {
    through: Damage_Resistance,
    foreignKey: 'monster_id'
});
Monster.belongsToMany(Damage_Types, {
    through: Damage_Immunity,
    foreignKey: 'damage_id'
});
Damage_Types.belongsToMany(Monster, {
    through: Damage_Immunity,
    foreignKey: 'monster_id'
});
Monster.belongsToMany(Damage_Types, {
    through: Damage_Vulnerability,
    foreignKey: 'damage_id'
});
Damage_Types.belongsToMany(Monster, {
    through: Damage_Vulnerability,
    foreignKey: 'monster_id'
});

export default { Damage_Types, Damage_Immunity, Damage_Resistance, Damage_Vulnerability };
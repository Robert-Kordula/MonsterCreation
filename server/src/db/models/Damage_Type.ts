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
class Damage_Type extends Model<NameAttributes, NameInput> implements NameAttributes {
    public id!: number;
    public name!: string;
}

Damage_Type.init({
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
            len: [3, 20]
        }
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Damage_Type'
});

export class Damage_Resistance extends Model<DamageAttributes, DamageInput> implements DamageAttributes {
    public monster_id!: ForeignKey<number>;
    public damage_id!: ForeignKey<number>;
}

Damage_Resistance.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Damage_Resistance',
    tableName: 'Damage_Resistances'
});

export class Damage_Immunity extends Model<DamageAttributes, DamageInput> {}

Damage_Immunity.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Damage_Immunity',
    tableName: 'Damage_Immunitiess'
});

export class Damage_Vulnerability extends Model<DamageAttributes, DamageInput> {}

Damage_Vulnerability.init({}, {
    sequelize: sequelizeConnection,
    modelName: 'Damage_Vulnerability',
    tableName: 'Damage_Vulnerabilities'
});

Monster.belongsToMany(Damage_Type, {through: Damage_Resistance});
Damage_Type.belongsToMany(Monster, {through: Damage_Resistance});
Monster.belongsToMany(Damage_Type, {through: Damage_Immunity});
Damage_Type.belongsToMany(Monster, {through: Damage_Immunity});
Monster.belongsToMany(Damage_Type, {through: Damage_Vulnerability});
Damage_Type.belongsToMany(Monster, {through: Damage_Vulnerability});

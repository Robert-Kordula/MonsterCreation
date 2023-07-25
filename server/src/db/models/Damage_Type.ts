import { DataTypes, Model, ForeignKey, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from "sequelize";
import Monster from "./Monster";
interface Damage_Model extends Model<InferAttributes<Damage_Model>, InferCreationAttributes<Damage_Model>> {
    id: CreationOptional<number>;
    name: string;
}

function Damage_Types(sequelize: Sequelize) {
    let damage_type = sequelize.define<Damage_Model>('damage_types', {
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

    Damage_Types(sequelize).belongsToMany(Monster(sequelize), { through: Damage_Resistance(sequelize) });
    Damage_Types(sequelize).belongsToMany(Monster(sequelize), { through: Damage_Immunity(sequelize) });
    Damage_Types(sequelize).belongsToMany(Monster(sequelize), { through: Damage_Vulnerability(sequelize) });
    
    return damage_type;
}

export interface Damages_Model extends Model<InferAttributes<Damages_Model>, InferCreationAttributes<Damages_Model>> {
    monster_id?: ForeignKey<number>;
    damage_id?: ForeignKey<number>;
}

function Damage_Resistance(sequelize: Sequelize) {
    let damage_resistances = sequelize.define<Damages_Model>('damage_resistances', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        damage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Damage_Types(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });

    Monster(sequelize).belongsToMany(Damage_Types(sequelize), {through: damage_resistances});
    return damage_resistances;
}

function Damage_Immunity(sequelize: Sequelize) {
    let damage_immunity = sequelize.define<Damages_Model>('damage_immunities', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        damage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Damage_Types(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });

    Monster(sequelize).belongsToMany(Damage_Types(sequelize), {through: damage_immunity});
    return damage_immunity;
}

function Damage_Vulnerability(sequelize: Sequelize) {
    let damage_immunity = sequelize.define<Damages_Model>('damage_vulnerability', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        damage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Damage_Types(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });

    Monster(sequelize).belongsToMany(Damage_Types(sequelize), {through: damage_immunity});
    return damage_immunity;
}

export default { Damage_Types, Damage_Immunity, Damage_Resistance, Damage_Vulnerability };
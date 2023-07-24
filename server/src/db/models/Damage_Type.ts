import { DataTypes, Model, ForeignKey, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

interface Damage_Model extends Model<InferAttributes<Damage_Model>, InferCreationAttributes<Damage_Model>> {
    id: CreationOptional<number>;
    name: string;
}

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

interface Damages_Model extends Model<InferAttributes<Damages_Model>, InferCreationAttributes<Damages_Model>> {
    monster_id: ForeignKey<number>;
    damage_id: ForeignKey<number>;
}

const Damage_Resistance = sequelizeConnection.define<Damages_Model>('damage_resistances', {
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    damage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Damage_Types, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

const Damage_Immunity = sequelizeConnection.define<Damages_Model>('damage_resistances', {
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    damage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Damage_Types, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

const Damage_Vulnerability = sequelizeConnection.define<Damages_Model>('damage_resistances', {
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    damage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Damage_Types, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

export default { Damage_Types, Damage_Immunity, Damage_Resistance, Damage_Vulnerability };
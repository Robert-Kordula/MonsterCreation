import { DataTypes, ForeignKey, Optional, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";

import Monster from "./Monster";

interface ActionsModel extends Model<InferAttributes<ActionsModel>, InferCreationAttributes<ActionsModel>> {
    id: CreationOptional<number>;
    //monster_id: ForeignKey<number>;
    name: string;
    desc: string;
    attack_bonus: number;
    damage_dice: string;
    damage_bonus: number;
}

const Actions = sequelizeConnection.define<ActionsModel>('actions', {
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
    },
    // monster_id: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false,
    //     references: {
    //         model: Monster, 
    //         key: 'id'
    //     }
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 30]
        }
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 1023]
        }
    },
    attack_bonus: {
        type: DataTypes.SMALLINT,
        validate: {
            checkDamage(value: number) {
                if (this.damage_dice === null) {
                    throw new Error('damage_dice cannot have a value while damage_dice is null');
                }
            },
            min: 1,
            max: 20
        }
    },
    damage_dice: {
        type: DataTypes.STRING,
        validate: {
            checkDamage(value: string) {
                if (this.attack_bonus === null) {
                    throw new Error('damage_dice cannot have a value while attack_bonus is null');
                }
            },
            is: /([123][0-9]|[1-9])[d]([468]|1[02]|20)([+]?[0-9]{0,3})/
        }
    },
    damage_bonus: {
        type: DataTypes.SMALLINT,
        validate: {
            checkDamage(value: string) {
                if (this.attack_bonus === null || this.damage_dice === null) {
                    throw new Error('damage_bonus cannot have a value while attack_bonus or damage_bonus are null');
                }
            },
            min: 1,
            max: 10
        }
    }
});

Monster.hasMany(Actions, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
//Action.belongsTo(Monster);

export default Actions;
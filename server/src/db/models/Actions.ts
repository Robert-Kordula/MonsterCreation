import { DataTypes, ForeignKey, Optional, Model } from "sequelize/types";
import sequelizeConnection from "../db-config";
import { DescAttributes } from "./interfaces/descInterface";

import Monster from "./Monster";
export interface ActionAttributes extends DescAttributes{
    attack_bonus?: number | undefined;
    damage_dice?: string;
    damage_bonus?: number;
}

export interface ActionInput extends Optional<ActionAttributes, 'id'> {}
export interface ActionOutput extends Required<ActionAttributes> {}

class Action extends Model<ActionAttributes, ActionInput> implements ActionAttributes{
    public id!: number;
    public monster_id!: ForeignKey<number>;
    public name!: string;
    public desc!: string;
    public attack_bonus?: number;
    public damage_dice?: string;
    public damage_bonus?: number;
}

Action.init({
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
        type:DataTypes.SMALLINT,
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
}, {
    sequelize: sequelizeConnection, 
    modelName: 'Action',
    tableName: 'Actions'
});

Monster.hasMany(Action, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCASE',
    onUpdate: 'CASCADE'
});
Action.belongsTo(Monster);

export default Action;
import { Model, DataTypes, Optional } from 'sequelize';
import connection from '../db-config';
import Type from './Type';
import SubType from './SubType';
import Alignment from './Alignment';
import Group from './Group';

interface Monster_Attributes {
    id: number;
    name: string;
    size: number;
    armor_class: number;
    armor_desc?: string;
    hit_points: number;
    hit_dice: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    perception?: number;
    challenge_rating?: number;
    strength_save?: number;
    dexterity_save?: number;
    intelligence_save?: number;
    wisdom_save?: number;
    charisma_save?: number;
    legendary_desc?: string;
    type_id?: number;
    subtype_id?: number;
    group_id?: number;
    alignment_id?: number;
}

export interface MonsterInput extends Optional<Monster_Attributes, 'id'> {}
export interface MonsterOutput extends Required<Monster_Attributes> {}
class Monster extends Model<Monster_Attributes, MonsterInput> implements Monster_Attributes {
    public id!: number;
    public name!: string;
    public size!: number;
    public armor_class!: number;
    public armor_desc?: string | undefined;
    public hit_points!: number;
    public hit_dice!: string;
    public strength!: number;
    public dexterity!: number;
    public constitution!: number;
    public intelligence!: number;
    public wisdom!: number;
    public charisma!: number;
    public perception?: number | undefined;
    public challenge_rating?: number | undefined;
    public strength_save?: number | undefined;
    public dexterity_save?: number | undefined;
    public intelligence_save?: number | undefined;
    public wisdom_save?: number | undefined;
    public charisma_save?: number | undefined;
    public legendary_desc?: string | undefined;
    public type_id?: number | undefined;
    public subtype_id?: number | undefined;
    public group_id?: number | undefined;
    public alignment_id?: number | undefined;

}
Monster.init({
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [3, 30]
        }
    },
    size: {
        type: DataTypes.STRING,
        values: ['SMALL', 'MEDIUM', 'LARGE', 'HUGE'],
        allowNull: false
    }, 
    armor_class: {
        type: DataTypes.SMALLINT, 
        allowNull: false,
        validate: {
            min: 5,
            max: 30
        }
    }, 
    armor_desc: {
        type: DataTypes.STRING,
        validate: {
            len: [3, 30]
        }
    },
    hit_points: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 600
        }
    },
    hit_dice: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /([123][0-9]|[1-9])[d]([468]|1[02]|20)([+]?[0-9]{0,3})/
        }
    },
    strength: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    dexterity: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    constitution: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    intelligence: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    wisdom: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    charisma: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 30
        }
    },
    perception: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 30
        }
    },
    challenge_rating: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^([0-9]|1\/[248]|[12][0-9]|[3][0])$/
        }
    },
    strength_save: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 20
        }
    },
    dexterity_save: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 20
        }
    },
    intelligence_save: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 20
        }
    },
    wisdom_save: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 20
        }
    },
    charisma_save: {
        type: DataTypes.SMALLINT,
        validate: {
            min: 1,
            max: 20
        }
    },
    legendary_desc: {
        type: DataTypes.STRING,
        validate: {
            len: [50, 511]
        }
    },
    // type_id: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false,
    //     references: {
    //         model: '', 
    //         key: 'id'
    //     },
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // },
    // subtype_id: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false,
    //     references: {
    //         model: SubType(sequelize), 
    //         key: 'id'
    //     },
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // },
    // group_id: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false,
    //     references: {
    //         model: Group(sequelize), 
    //         key: 'id'
    //     },
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // },
    // alignment_id: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false,
    //     references: {
    //         model: Alignment(sequelize), 
    //         key: 'id'
    //     },
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    //}
}, {
    sequelize: connection,
});
// export default function( sequelize: Sequelize) {
//     const monster = sequelize.define<Monster_Model>('monsters', {
        
//     });

    // monster.hasOne(Type(sequelize), { foreignKey: 'type_id'});
    // monster.hasOne(SubType(sequelize), { foreignKey: 'subtype_id'});
    // monster.hasOne(Group(sequelize), { foreignKey: 'group_id'});
    // monster.hasOne(Alignment(sequelize), { foreignKey: 'alignment_id'});
    // return monster;
// }

export default Monster;
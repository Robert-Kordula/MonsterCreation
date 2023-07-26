import { Sequelize, Model, DataTypes, Optional, CreationOptional, ForeignKey, InferAttributes, InferCreationAttributes } from 'sequelize';

import Type from './Type';
import SubType from './SubType';
import Alignment from './Alignment';
import Group from './Group';
export interface Monster_Model extends Model<InferAttributes<Monster_Model>, InferCreationAttributes<Monster_Model>> {
    id?: CreationOptional<number>;
    name: string;
    size: number;
    armor_class: number;
    armor_desc?: CreationOptional<string>;
    hit_points: number;
    hit_dice: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    perception?: CreationOptional<number>;
    challenge_rating?: CreationOptional<number>;
    strength_save?: CreationOptional<number>;
    dexterity_save?: CreationOptional<number>;
    intelligence_save?: CreationOptional<number>;
    wisdom_save?: CreationOptional<number>;
    charisma_save?: CreationOptional<number>;
    legendary_desc?: CreationOptional<string>;
    type_id?: ForeignKey<number>;
    subtype_id?: ForeignKey<number>;
    group_id?: ForeignKey<number>;
    alignment_id?: ForeignKey<number>;
}

export default function( sequelize: Sequelize) {
    return sequelize.define<Monster_Model>('monsters', {
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
        type_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Type(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        subtype_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: SubType(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        group_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Group(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        alignment_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Alignment(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });
}
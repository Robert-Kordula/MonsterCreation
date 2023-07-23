import { Sequelize, DataTypes, Optional } from 'sequelize';
import sequelizeConnection from './../db-config';

import Type from './Type';
import SubType from './SubType';
import Alignment from './Alignment';
import Group from './Group';
export interface MonsterAttributes {
    id: number;
    name: string;
    size: number;
    armor_class: number;
    armor_desc: string;
    hit_points: number;
    hit_dice: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    perception: number;
    challenge_rating: number;
    strength_save: number;
    dexterity_save: number;
    intelligence_save: number;
    wisdom_save: number;
    charisma_save: number;
    legendary_desc: string;
}

export interface MonsterInput extends Optional<MonsterAttributes, 'id'> {}
export interface MonsterOutput extends Required<MonsterAttributes> {}

export const Monster = sequelizeConnection.define('monsters', {
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
    }});

Type.hasMany(Monster, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Monster.belongsTo(Type);
SubType.hasMany(Monster, {
    foreignKey: {
        name: 'id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Monster.belongsTo(SubType);
Alignment.hasMany(Monster, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Monster.belongsTo(Alignment);
Group.hasMany(Monster, {
    foreignKey: {
        name: 'id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Monster.belongsTo(Group);

export default Monster;
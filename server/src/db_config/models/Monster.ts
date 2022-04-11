import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('postgres:');

const Type = require('./Type');
const SubType = require('./SubType');
const Group = require('./Group');
const Alignment = require('./Alignment');
const Speed = require('./Speed');
const Sense = require('./Sense');
const Languages = require('./Languages');
const Damage_Vulnerability = require('./Damage_Vulnerability');
const Damage_Resistance = require('./Damage_Resistance');
const Damage_Immunity = require('./Damage_Immunity');

class Monster extends Model {}

Monster.init({
    name: {
        type:DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [3, 30]
        }
    },
    size: {
        type: DataTypes.ENUM('SMALL', 'MEDIUM', 'LARGE', 'HUGE'),
        allowNull: false
    }, 
    type: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'Types',
            key: 'id'
        }
    }, 
    subtype: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'Subtypes',
            key: 'id'
        }
    }, 
    group: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'Groups',
            key: 'id'
        }
    }, 
    alignment: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'Alignments',
            key: 'id'
        }
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
    }
}, {
    sequelize,
    modelName: 'Monster'
});

Monster.hasOne(Type);
Monster.hasOne(SubType);
Monster.hasOne(Group);
Monster.hasOne(Alignment);

Monster.hasMany(Speed, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Monster.hasMany(Sense, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Monster.hasMany(Languages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Monster.hasMany(Damage_Vulnerability, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Monster.hasMany(Damage_Immunity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Monster.hasMany(Damage_Resistance, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Monster;
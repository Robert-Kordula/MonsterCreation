import { Sequelize, DataTypes } from 'sequelize';

// const Type = require('./Type');
// const SubType = require('./SubType');
// const Group = require('./Group');
// const Alignment = require('./Alignment');

// class Monster extends Model {}

// Monster.init({
//     name: {
//         type:DataTypes.STRING,
//         allowNull: false, 
//         validate: {
//             len: [3, 30]
//         }
//     },
//     size: {
//         type: DataTypes.ENUM('SMALL', 'MEDIUM', 'LARGE', 'HUGE'),
//         allowNull: false
//     }, 
//     type: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Type,
//             key: 'id'
//         }
//     }, 
//     subtype: {
//         type: DataTypes.SMALLINT,
//         references: {
//             model: SubType,
//             key: 'id'
//         }
//     }, 
//     group: {
//         type: DataTypes.SMALLINT,
//         references: {
//             model: Group,
//             key: 'id'
//         }
//     }, 
//     alignment: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         references: {
//             model: Alignment,
//             key: 'id'
//         }
//     }, 
//     armor_class: {
//         type: DataTypes.SMALLINT, 
//         allowNull: false,
//         validate: {
//             min: 5,
//             max: 30
//         }
//     }, 
//     armor_desc: {
//         type: DataTypes.STRING,
//         validate: {
//             len: [3, 30]
//         }
//     },
//     hit_points: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 600
//         }
//     },
//     hit_dice: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             is: /([123][0-9]|[1-9])[d]([468]|1[02]|20)([+]?[0-9]{0,3})/
//         }
//     },
//     strength: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     dexterity: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     constitution: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     intelligence: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     wisdom: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     charisma: {
//         type: DataTypes.SMALLINT,
//         allowNull: false,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     perception: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 30
//         }
//     },
//     challenge_rating: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             is: /^([0-9]|1\/[248]|[12][0-9]|[3][0])$/
//         }
//     },
//     strength_save: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     },
//     dexterity_save: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     },
//     intelligence_save: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     },
//     wisdom_save: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     },
//     charisma_save: {
//         type: DataTypes.SMALLINT,
//         validate: {
//             min: 1,
//             max: 20
//         }
//     },
//     legendary_desc: {
//         type: DataTypes.STRING,
//         validate: {
//             len: [50, 511]
//         }
//     }
// }, {
//     sequelize,
//     modelName: 'Monster'
// });

module.exports = (sequelize: Sequelize) => {
    
    const Type = require('./Type');
    const SubType = require('./SubType');
    const Group = require('./Group');
    const Alignment = require('./Alignment');
    
    const Monster = sequelize.define('monster', {
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
            allowNull: false,
            references: {
                model: Type,
                key: 'id'
            }
        }, 
        subtype: {
            type: DataTypes.SMALLINT,
            references: {
                model: SubType,
                key: 'id'
            }
        }, 
        group: {
            type: DataTypes.SMALLINT,
            references: {
                model: Group,
                key: 'id'
            }
        }, 
        alignment: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Alignment,
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
    });
    
    return Monster;
};
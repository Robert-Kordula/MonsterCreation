const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    monsters: require('./Monster')(sequelize),
    damage_resistances: require('./Damage_Resistance')(sequelize),
    damage_vulnerabilities: require('./Damage_Vulnerability'),
    damage_immunities: require('./Damage_Immunity'),
    condition_immunities: require('./Condition_Immunity'),
    languages: require('./Languages'),
    senses: require('./Sense'),
    skills: require('./Skills'),
    speeds: require('./Speed'),
    actions: require('./Actions'),
    legendary_actions: require('./Legendary_Action'),
    reaction: require('./Reaction'),
    special_abilities: require('./Special_Ability'),
    spell_list: require('./Spell_list')
};

module.exports = db;

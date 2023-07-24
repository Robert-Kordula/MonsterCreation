import { Sequelize } from 'sequelize';

let port = parseInt(<string>process.env.DB_PORT) || 5432

const sequelizeConnection = new Sequelize(process.env.DB_SCHEMA || 'postgres',
process.env.DB_USER || 'postgres',
process.env.DB_PASSWORD || '',
{
    host: process.env.DB_HOST || 'localhost',
    port: port,
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.DB_SSL == "true"
    }
});

import modelIndex from '../db/models/index';
console.log(sequelizeConnection);

export const dbInit = () => Promise.all([
    modelIndex.Monster.sync({ alter: true }),
    modelIndex.Type.sync({ alter: true }),
    modelIndex.SubType.sync({ alter: true }),
    modelIndex.Group.sync({ alter: true }),
    modelIndex.Alignment.sync({ alter: true }),
    modelIndex.Language_Table.Language.sync({alter: true}),
    modelIndex.Language_Table.Languages.sync({ alter: true }),
    modelIndex.Action.sync({ alter: true }),
    modelIndex.Condition_Immunity.sync({ alter: true }),
    modelIndex.Damage_Tables.Damage_Types.sync({ alter: true}),
    modelIndex.Damage_Tables.Damage_Immunity.sync({ alter: true }),
    modelIndex.Damage_Tables.Damage_Resistance.sync({ alter: true }),
    modelIndex.Damage_Tables.Damage_Vulnerability.sync({ alter: true }),
    modelIndex.Legendary_Action.sync({ alter: true }),
    modelIndex.Reaction.sync({ alter: true }),
    modelIndex.Sense.sync({ alter: true }),
    modelIndex.Skill.sync({ alter: true }),
    modelIndex.Special_Ability.sync({ alter: true }),
    modelIndex.Speeds.sync({ alter: true }),
    modelIndex.Spell.sync({ alter: true}),
    modelIndex.Spell_List.sync({ alter: true }),
]);

export default sequelizeConnection;
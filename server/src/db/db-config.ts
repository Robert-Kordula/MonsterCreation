import { 
    Monster, 
    Type, 
    SubType, 
    Group, 
    Alignment,
    Language, 
    Languages, 
    Action, 
    Condition_Immunity,
    Damage_Type, 
    Damage_Immunity, 
    Damage_Resistance, 
    Damage_Vulnerability, 
    Legendary_Action, 
    Reaction, 
    Sense, 
    Skill, 
    Special_Ability, 
    Speeds,
    Spell, 
    Spell_List 
} from '../db/models/index';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

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

console.log(sequelizeConnection);

export const dbInit = () => Promise.all([
    Monster.sync({ alter: true }),
    Type.sync({ alter: true }),
    SubType.sync({ alter: true }),
    Group.sync({ alter: true }),
    Alignment.sync({ alter: true }),
    Language.sync({alter: true}),
    Languages.sync({ alter: true }),
    Action.sync({ alter: true }),
    Condition_Immunity.sync({ alter: true }),
    Damage_Type.sync({ alter: true}),
    Damage_Immunity.sync({ alter: true }),
    Damage_Resistance.sync({ alter: true }),
    Damage_Vulnerability.sync({ alter: true }),
    Legendary_Action.sync({ alter: true }),
    Reaction.sync({ alter: true }),
    Sense.sync({ alter: true }),
    Skill.sync({ alter: true }),
    Special_Ability.sync({ alter: true }),
    Speeds.sync({ alter: true }),
    Spell.sync({ alter: true}),
    Spell_List.sync({ alter: true }),
]);

export default sequelizeConnection;
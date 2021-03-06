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

const dbInit = () => Promise.all([
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

export default dbInit;
import { Model, DataTypes, ForeignKey, Optional } from "sequelize/types";
import sequelizeConnection from "../db-config";
import { NameAttributes, NameInput } from "./interfaces/nameInterfaces";
import Monster from "./Monster";

export interface SkillsAttributes {
    skill_id: ForeignKey<number>;
    monster_id: ForeignKey<number>;
    value: number;
}

export interface SkillsInput extends Optional<SkillsAttributes, 'skill_id'> {}
export interface SkillsOutput extends Required<SkillsAttributes> {}

class Skill extends Model<NameAttributes, NameInput> implements NameAttributes{
    public id!: number;
    public name!: string;
}

Skill.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 10]
        }
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Skill',
    tableName: 'Skill'
});

class Skills extends Model {}

Skills.init({
    value: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 1,
            max: 20
        }
    }
}, {
    sequelize: sequelizeConnection,
    modelName: 'Skills',
    tableName: 'Skills'
});

Monster.belongsToMany(Skill, {through: Skills});
Skill.belongsToMany(Skill, {through: Skills});

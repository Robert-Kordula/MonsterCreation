import { ForeignKey, DataTypes, Model, Optional, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize } from "sequelize";
import Monster from "./Monster";

export interface Language_Model extends Model<InferAttributes<Language_Model>, InferCreationAttributes<Language_Model>> {
    id: CreationOptional<number>;
    name: string;
}
export interface Languages_Model extends Model<InferAttributes<Languages_Model>, InferCreationAttributes<Languages_Model>> {
    monster_id: ForeignKey<number>;
    language_id: ForeignKey<number>;
}

export function Language(sequelize: Sequelize) {
    let language = sequelize.define('language', {
        id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                len: [3, 20]
            }
        }
    });

    return language;
} 
export default function(sequelize: Sequelize) {
    let languages = sequelize.define<Languages_Model>('language_list', {
        monster_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Monster(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        language_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: Language(sequelize), 
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    });
    Monster(sequelize).belongsToMany(Language(sequelize), { through: languages});
    Language(sequelize).belongsToMany(Monster(sequelize), { through: languages });
    return languages;
}
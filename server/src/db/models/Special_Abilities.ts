import { Model, DataTypes, ForeignKey, Optional } from "sequelize/types";
import sequelizeConnection from "../db-config";
import { DescAttributes, DescInput } from "./interfaces/descInterface";
import Monster from "./Monster";

class Special_Ability extends Model<DescAttributes, DescInput> implements DescAttributes {
    public id!: number;
    public monster_id!: ForeignKey<number>;
    public name!: string;
    public desc!: string;
}


Special_Ability.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 30]
        }
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 1023]
        }
    }
}, {
    sequelize: sequelizeConnection, 
    modelName: 'Special_Ability',
    tableName: 'Special_Abilities'
});

Monster.hasMany(Special_Ability, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Special_Ability.belongsTo(Monster);

export default Special_Ability;
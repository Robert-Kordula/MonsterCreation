import { Model, DataTypes, ForeignKey, Optional } from "sequelize";
import sequelizeConnection from "../db-config";
import { DescAttributes, DescInput } from "./interfaces/descInterface";
import Monster from "./Monster";

class Reaction extends Model<DescAttributes, DescInput> implements DescAttributes {
    public id!: number;
    public monster_id!: ForeignKey<number>;
    public name!: string;
    public desc!: string;
}


Reaction.init({
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
    modelName: 'Reaction',
    tableName: 'Reactions'
});

Monster.hasMany(Reaction, {
    foreignKey: {
        name: 'monster_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

export default Reaction;
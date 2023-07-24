import { Model, DataTypes, ForeignKey, Optional, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

interface Reactions_Models extends Model<InferAttributes<Reactions_Models>, InferCreationAttributes<Reactions_Models>> {
    id: CreationOptional<number>;
    monster_id: number;
    name: string;
    desc: string;
}
const Reactions = sequelizeConnection.define<Reactions_Models>('reactions', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    monster_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: Monster, 
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },name: {
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
});

export default Reactions;
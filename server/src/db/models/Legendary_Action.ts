import { Model, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelizeConnection from "../db-config";
import Monster from "./Monster";

interface Legendary_Model extends Model<InferAttributes<Legendary_Model>, InferCreationAttributes<Legendary_Model>> {
    id: CreationOptional<number>;
    monster_id: CreationOptional<number>;
    name: string;
    desc: string;
}

const Legendary_Action = sequelizeConnection.define<Legendary_Model>('legendary_actions', {
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
});

export default Legendary_Action;
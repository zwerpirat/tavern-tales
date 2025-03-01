import { Model, DataTypes } from "sequelize";
import sequelize from "./modelindex";

interface NPCAttributes {
  id: bigint,
  name: string,
  category: string,
  race: string,
  location: string,
  description: string,
  favorite: boolean,
  image: string
}

class NPC extends Model<NPCAttributes> implements NPCAttributes {
  public id!: bigint;
  public name!: string;
  public category!: string;
  public race!: string;
  public location!: string;
  public description!: string;
  public favorite!: boolean
  public image!: string;
}

// initializing a new table with sequelize
NPC.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "npc"
  }
);

export default NPC; 
import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "bob",
  password: "postgres124",
  database: "tavernDB",
});

export default sequelize; 
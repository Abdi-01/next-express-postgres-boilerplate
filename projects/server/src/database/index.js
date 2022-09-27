import { Sequelize } from "sequelize";

let db;

export const initialize = async () => {
  try {
    if (!db) {
      db = new Sequelize("postgresql://postgres:r00t@localhost:5433/postgres", {
        dialect: "postgres",
      });

      await db.authenticate();

      console.log("Connection to DB has been established.");
    }
  } catch (error) {
    console.log("Unable to connect to DB", error);
  }
};

export default db;

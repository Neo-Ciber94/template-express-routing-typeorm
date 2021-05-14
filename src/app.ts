import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { useExpressServer } from "routing-controllers";
import { CorsOptions } from "cors";
// import { createConnection } from "typeorm";

// Server port
const PORT = process.env.PORT || 8000;

// Create the express app
const app = express();

// Setup middlewares
app.use(morgan("dev"));

// Cross-origin resource sharing configuration
const corsOptions: CorsOptions = {
  origin: "*",
};

// Setup routing controllers
useExpressServer(app, {
  cors: corsOptions,
  controllers: [__dirname + "/controllers/*.ts"],
  middlewares: [__dirname + "/middlewares/*.ts"],
});

// Setup typeorm
// Configure the database in `ormconfig.json` and install the proper database driver to use:
// - Mysql: npm install mysql --save
// - Mysql: npm install mysql2 --save
//
// For other drivers checkout: https://github.com/typeorm/typeorm#installation

// createConnection()
//   .then(async (connection) => {
//     await connection.runMigrations();
//     console.log(`Connected to database: ${connection.driver.database}`);
//   })
//   .catch((e) => console.error(e));

// Start listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

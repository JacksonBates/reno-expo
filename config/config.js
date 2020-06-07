require("dotenv").config();
const fs = require("fs");

module.exports = {
  development: {
    username: process.env.DEVELOPMENT_DATABASE_USERNAME,
    password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE,
    host: process.env.DEVELOPMENT_DATABASE_HOST,
    dialect: "postgres",
    port: "5432",
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.TEST_DATABASE_HOST,
    dialect: "postgres",
    port: "5432",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    username: process.env.PRODUCTION_DATABASE_USERNAME,
    password: process.env.PRODUCTION_DATABASE_PASSWORD,
    database: process.env.PRODUCTION_DATABASE,
    host: process.env.PRODUCTION_DATABASE_HOST,
    dialect: "postgres",
    port: "5432",
  },
};

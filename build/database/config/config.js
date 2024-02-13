"use strict";
require("dotenv/config");
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;
const config = {
    username: DB_USER,
    password: 'password',
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql"
};
module.exports = config;

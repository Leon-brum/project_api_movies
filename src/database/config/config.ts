
import 'dotenv/config';
import { Options } from 'sequelize'

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST
} = process.env;

const config: Options = {
  username: DB_USER,
  password: 'password',
  database: DB_NAME,
  host: DB_HOST,
  dialect: "mysql"
};

export = config;

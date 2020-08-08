import knex from 'knex';
require('dotenv').config();

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

export default connection;

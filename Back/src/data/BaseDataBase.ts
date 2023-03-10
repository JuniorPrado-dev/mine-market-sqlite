import knex from "knex";

import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {
   protected static connection = knex({
      //mysql
      //   client: "mysql2",
      //   connection: {
      //      host: process.env.DB_HOST,
      //      port:Number(process.env.DB_PORT),
      //      user: process.env.DB_USER,
      //      password: process.env.DB_PASSWORD,
      //      database: process.env.DB_SCHEMA,
      //      multipleStatements: true
      //   },
      client: 'sqlite3', // or 'better-sqlite3'
      connection: {
         filename: `${process.env.DB_SQLITE}`
      },
      useNullAsDefault: true
   }) 
}
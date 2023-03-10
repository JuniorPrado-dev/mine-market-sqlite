"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataBase = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class BaseDataBase {
}
exports.BaseDataBase = BaseDataBase;
BaseDataBase.connection = (0, knex_1.default)({
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
    client: 'sqlite3',
    connection: {
        filename: `${process.env.SQLITE_DB}`
    },
    useNullAsDefault: true
});

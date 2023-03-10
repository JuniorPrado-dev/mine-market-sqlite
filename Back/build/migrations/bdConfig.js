"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
// Caminho relativo do arquivo
// const absolutePath = path.resolve('./data').replace(/\\/g,"/");
// console.log(absolutePath);
// this is a top-level await 
(() => __awaiter(void 0, void 0, void 0, function* () {
    // open the database
    const db = yield (0, sqlite_1.open)({
        filename: `database.db`,
        driver: sqlite3_1.default.Database
    }).then((db) => __awaiter(void 0, void 0, void 0, function* () {
        yield db.migrate({
            /**
            * If true, will force the migration API to rollback and re-apply the latest migration over
            * again each time when Node.js app launches.
            */
            force: false,
            /**
            * Migrations table name. Default is 'migrations'
            */
            table: "migrations.sql",
            /**
            * Path to the migrations folder. Default is `path.join(process.cwd(), 'migrations')`
            */
            migrationsPath: "./src/migrations"
        });
    }));
}))();

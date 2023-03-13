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
const dotenv_1 = __importDefault(require("dotenv"));
// import path, { basename } from 'path'
// Caminho relativo do arquivo
// const absolutePath = path.resolve('./data').replace(/\\/g,"/");
// console.log(absolutePath);
// this is a top-level await
dotenv_1.default.config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // open the database
    const db = yield (0, sqlite_1.open)({
        filename: `database.bd`,
        driver: sqlite3_1.default.Database
    }).then((db) => __awaiter(void 0, void 0, void 0, function* () {
        yield db.exec(`CREATE TABLE Case_Clients(
        id VARCHAR(255) primary key,
        name varchar(255) unique
      );
      CREATE TABLE Case_Products(
        id VARCHAR(255) primary key,
        name varchar(255),
        price float,
        qty_stock INT
      );
      
      CREATE TABLE Case_Orders(
        id VARCHAR(255) primary key,
        order_date DATE,
        delivery_date DATE,
        qty int,
        fk_client VARCHAR(255),
        fk_product VARCHAR(255),
        FOREIGN KEY(fk_client) REFERENCES Case_Clients(id),
        FOREIGN KEY(fk_product) REFERENCES Case_Products(id)
      );`).then((bd) => __awaiter(void 0, void 0, void 0, function* () {
            yield db.run(`INSERT INTO Case_Products
          VALUES 
          ('1' , 'Tomate Italiano', 7.99 , 700),
          ('2', 'Couve Flor Bandeja 250G', 7.99, 500),
          ('3', 'Repolho Roxo Orgânico Embalagem 350G',  6.99, 300),
          ('4', 'Couve Kale Orgânica  150G',  6.99 , 200),
          ('5', 'Banana Nanica' , 7.99, 500),
          ('6', 'Uva Crimson 450G Bd',9.98, 600),
          ('7', 'Kiwi Importado 30/36',19.98, 600),
          ('8', 'Mamão Formosa',12.99, 760),
          ('9', 'Manga Palmer Kg' ,5.99, 760),
          ('10', 'Cranberries Pacote 70G',19.98, 600),
          ('11', 'Goiaba Vermelha kg',14.98, 60),
          ('12', 'Caju Bandeja 300G',14.90, 490),
          ('13', 'Ameixa Seca com Caroço 180G', 12.90, 80),
          ('14', 'Coco Seco Kg', 9.98, 600),
          ('15', 'Detergente Ypê Clear 500Ml', 1.99, 565),
          ('16', 'Agua Sanitaria Candura 2L', 6.49, 78),
          ('17', 'Limpador Perfumado Veja Aroma Sense Alegria 500Ml', 9.99, 80),
          ('18', 'Amaciante Downy Brisa do Verão 500Ml' , 13.99, 207),
          ('19', 'Batata Frita Lisa Sal e Vinagre Lays 80G ', 9.99, 29),
          ('20', 'Sopa de Batata com Carne Vono Ajinomoto 18G', 3.99, 80),
          ('21', 'Antisséptico Bucal Listerine Anticáries Zero Álcool 500Ml', 23.99,50),
          ('22', 'Escova Dental Colgate Classic Long Macia', 6.99,60),
          ('23', 'Toalha Umedecida Johnsons Baby Limpeza Suave Embalagem 44 Un', 10.99,80),
          ('24', 'Fanta Guaraná 350Ml', 3.99, 50),
          ('25', 'Molho Shoyu Satis Suave 150Ml', 4.29, 70),
          ('26', 'Sabonete Barra Antibactericida Carvão Detox Envoltório Protex 85G',3.29, 89),
          ('27', 'Desodorante Antitranspirante Rexona sem Perfume 50Ml', 11.99,208),
          ('28', 'Suco Del Valle 100% Laranja 1L', 9.99, 456),
          ('29', 'Biscoito Recheado Milkshake de Morango Oreo 90G', 3.99, 456),
          ('30', 'Cerveja Duplo Malte Puro Malte Br',3.99,500);`);
        }));
    }));
}))();

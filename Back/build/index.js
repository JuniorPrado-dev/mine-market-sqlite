"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientRouter_1 = require("./router/clientRouter");
const app_1 = require("./app");
const productRouter_1 = require("./router/productRouter");
const orderRouter_1 = require("./router/orderRouter");
const path_1 = __importDefault(require("path"));
const local = path_1.default.resolve("../src");
console.log(local);
app_1.app.get("/", (req, resp) => {
    resp.send(`API Mine Markert ok! ${local}`);
});
app_1.app.use("/client", clientRouter_1.clientRouter);
app_1.app.use("/product", productRouter_1.productRouter);
app_1.app.use("/order", orderRouter_1.orderRouter);

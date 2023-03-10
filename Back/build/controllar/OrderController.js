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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const OrderBusiness_1 = require("../business/OrderBusiness");
class OrderController {
    constructor() {
        this.orderBusiness = new OrderBusiness_1.OrderBusiness();
        this.createOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    deliveryDate: req.body.deliveryDate,
                    fkClient: req.body.fkClient,
                    productList: req.body.productList
                };
                yield this.orderBusiness.createOrder(input);
                res.status(200).send("Pedido realizado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.OrderController = OrderController;

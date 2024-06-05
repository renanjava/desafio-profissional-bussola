"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
const mongoose = require("mongoose");
exports.ProductsSchema = new mongoose.Schema({
    name: String,
    value: Number,
    quantity: Number
});
//# sourceMappingURL=products.schema.js.map
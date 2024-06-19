"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenteSchema = void 0;
const mongoose = require("mongoose");
exports.AgenteSchema = new mongoose.Schema({
    name: String,
    description: String,
    icon: String,
    role: String
});
//# sourceMappingURL=agente.entity.js.map
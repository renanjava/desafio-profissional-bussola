"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenteSchema = void 0;
const mongoose = require("mongoose");
exports.AgenteSchema = new mongoose.Schema({
    uuid: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    role: { type: String, required: true }
});
//# sourceMappingURL=agente.entity.js.map
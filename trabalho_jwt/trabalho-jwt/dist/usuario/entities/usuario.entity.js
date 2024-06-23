"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose = require("mongoose");
exports.UsuarioSchema = new mongoose.Schema({
    id: { type: String, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
    username: { type: String, required: true },
    password: { type: String, required: true }
});
//# sourceMappingURL=usuario.entity.js.map
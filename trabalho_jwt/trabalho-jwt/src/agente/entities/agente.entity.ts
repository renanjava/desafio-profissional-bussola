import * as mongoose from 'mongoose';

export const AgenteSchema = new mongoose.Schema({
    uuid: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    role: { type: String, required: true }
});
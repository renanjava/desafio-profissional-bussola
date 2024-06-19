import * as mongoose from 'mongoose';

export const AgenteSchema = new mongoose.Schema({
    name: String,
    description: String,
    icon: String,
    role: String
})
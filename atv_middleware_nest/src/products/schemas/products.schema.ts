import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
    name: String,
    value: Number,
    quantity: Number
})
import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

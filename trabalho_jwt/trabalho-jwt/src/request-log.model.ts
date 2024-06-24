import { Schema, model, Document } from 'mongoose';

export interface IRequestLog extends Document {
  timestamp: Date;
  method: string;
  endpoint: string;
  responseTime: number;
}

export const RequestLogSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  method: String,
  endpoint: String,
  responseTime: Number,
});

export const RequestLogModel = model<IRequestLog>('RequestLog', RequestLogSchema);

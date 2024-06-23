import * as mongoose from 'mongoose';
export declare const AgenteSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
    icon: string;
    role: string;
    uuid: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    description: string;
    icon: string;
    role: string;
    uuid: string;
}>> & mongoose.FlatRecord<{
    name: string;
    description: string;
    icon: string;
    role: string;
    uuid: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;

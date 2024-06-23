import * as mongoose from 'mongoose';
export declare const UsuarioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id: string;
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    username: string;
    password: string;
}>> & mongoose.FlatRecord<{
    id: string;
    username: string;
    password: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;

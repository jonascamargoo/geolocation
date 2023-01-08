import mongoose, { Document, Schema } from 'mongoose';
//o mongoose tem um export default, que to chamando de mongoose. Document e Schema n sao default, portanto ficam entre chaves 


export interface IBook {
    title: string;
    author: string;
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, required: true, ref: 'Author' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Book', BookSchema);

import mongoose, { Document, Schema } from "mongoose";

// if i want to put the id field whithin IAuthor, i must call authorId insted of just id, it's because of Document class inherited
export interface IAuthor {
    name: string;
}

export interface IAuthorModel extends IAuthor, Document {}

const AuthorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
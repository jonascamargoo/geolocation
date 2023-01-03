import mongoose, { Document, Schema } from "mongoose";

export interface IPartner {
    name: string;
}

export interface IPartnerModel extends IPartner, Document {}

const PartnerSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IPartnerModel>('Partner', PartnerSchema);
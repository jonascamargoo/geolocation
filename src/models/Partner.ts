import mongoose, { Document, Schema } from 'mongoose';

export interface IPartner {
    //partnerId: string;
    tradingName: string;
    ownerName: string;
    document: string;
    coverageArea: {
        type: string,
        coordinates: number[];
    },
    address: {
        type: string,
        coordinates: number[]
    }
}

export interface IPartnerModel extends IPartner, Document {}

const PartnerSchema: Schema = new Schema(
    {
        // partnerId: {
        //     type: String,
        //     required: [true, 'Please add a partner ID'],
        //     unique: true,
        //     trim: true,
        //     maxlength: [10, 'Partner ID must be less than 10 chars']
        // },
        tradingName: { type: String, required: [true, 'Please add a partner trading name'] },
        ownerName: { type: String, required: true },
        document: { type: String, required: true, unique: true },
        coverageArea: {
            type: {
                type: String,
                required: true,
                enum: ['MultiPolygon']
            },
            coordinates: {
                type: [Number],
                required: true,
                index: '2dsphere'
            }
        },
        address: {
            type: {
                type: String,
                required: true,
                enum: ['Point']
            },
            coordinates: {
                type: [Number],
                required: true,
                index: '2dsphere'
            }
        }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IPartnerModel>('Book', PartnerSchema);
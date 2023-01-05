import mongoose, { Document, Mongoose, Schema } from 'mongoose';
import geocoder from '../utils/geocoder';

export interface IPartner {
    partnerId: number;
    tradingName: string;
    ownerName: string;
    document: string;
    coverageArea: {
        type: string;
        coordinates: number[][];
    },
    address: {
        type: string,
        coordinates: [number];
    }
}

export interface IPartnerModel extends IPartner, Document {}

const PartnerSchema: Schema = new Schema(
    {
        partnerId: {
            type: Number,
            unique: true,
            trim: true,
        },
        tradingName: { type: String, required: [true, 'Please add a partner trading name'] },
        ownerName: { type: String, required: true },
        document: { type: String, required: true, unique: true },
        // coverageArea: {
        //     type: {
        //         type: String,
        //         enum: ['MultiPolygon'],
        //         required: true
        //     },
        //     coordinates: {
        //         type: [
        //             []
        //         ],
        //         index: '2dsphere',
        //         required: true
        //     }
        // }
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


// Geocode & create location
// PartnerSchema.pre('save', async function(next) {
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//       type: 'Point',
//       coordinates: [loc[0].longitude, loc[0].latitude],
//       formattedAddress: loc[0].formattedAddress
//     };
  
//     // Do not save address
//     this.address = undefined;
//     next();
// });

//devo fazer outro desse para coverageArea?


export default mongoose.model<IPartnerModel>('Partner', PartnerSchema);
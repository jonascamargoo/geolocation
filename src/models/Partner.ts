import mongoose, { Document, Schema } from 'mongoose';

// export interface IPartner {
//     partnerId: number;
//     tradingName: string;
//     ownerName: string;
//     document: string;
//     coverageArea: {
//         type: string
//         coordinates: number[][][][];
//     },
//     address: {
//         type: string,
//         coordinates: number[];
//     }
// }

// export interface IPartnerModel extends IPartner, Document {}



// const PartnerSchema: Schema = new Schema(
//     {
//         partnerId: {
//             type: Number,
//             unique: true,
//             trim: true,
//         },
//         tradingName: { type: String, required: [true, 'Please add a partner trading name'] },
//         ownerName: { type: String, required: true },
//         document: { type: String, required: true, unique: true },
//         coverageArea: {
//             type: {
//                 type: String,
//                 required: true,
//                 enum: ['MultiPolygon']
//             },
//             coordinates: {
//                 type:[
//                     [[[Number], [Number], [Number], [Number]]],
//                     [[[Number], [Number], [Number], [Number], [Number]]]
//                 ],
//                 required: true,
//                 index: '2dsphere'
//             }
//         },
//         address: {
//             type: {
//                 type: String,
//                 required: true,
//                 enum: ['Point']
//             },
//             coordinates: {
//                 type: [Number],
//                 required: true,
//                 index: '2dsphere'
//             }
//         }
//     },
//     {
//         versionKey: false
//     }
// );

// export default mongoose.model<IPartnerModel>('Partner', PartnerSchema);


// ---------------


interface CoverageArea {
    type: string;
    coordinates: number[][][][];
  }
  
  interface Address {
    type: string;
    coordinates: number[];
  }
  
  interface Brewery {
    id: number;
    tradingName: string;
    ownerName: string;
    document: string;
    coverageArea: CoverageArea;
    address: Address;
}


const coverageAreaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  coordinates: {
    type:[
        [[[Array], [Array], [Array], [Array] ] ],
        [ [ [Array], [Array], [Array], [Array], [Array] ]]
    ],
    required: true
  }
});

const addressSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const brewerySchema: Schema = new mongoose.Schema({
  partnerId: {
    type: Number,
    unique: true,
    trim: true,
    
  },
  tradingName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  coverageArea: {
    type: coverageAreaSchema,
    required: true
  },
  address: {
    type: addressSchema,
    required: true
  }
});

export default mongoose.model('Brewery', brewerySchema);

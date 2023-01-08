import mongoose, { Document, Schema } from 'mongoose';

export interface IPartner {
  partnerId: string;
  tradingName: string;
  ownerName: string;
  document: string;
  coverageArea: {
    type: string;
    coordinates: number[][][][];
  };
  address: {
    type: string;
    coordinates: number[];
  };
}

const PartnerSchema: Schema = new mongoose.Schema(
  {
    partnerId: {
      type: String,
      unique: true,
      trim: true,
    },
    tradingName: {
      type: String,
      required: [true, 'Please add a partner trading name']
    },
    ownerName: {
      type: String,
      required: [true, 'Please add a partner owner name']
    },
    document: {
      type: String,
      required: [true, 'Please add a unique document'],
      unique: true
    },
    coverageArea: {
      type: {
        type: String,
        required: true
      },
      coordinates: {
        type:[
          [[[Array], [Array], [Array], [Array]]],
          [[[Array], [Array], [Array], [Array], [Array]]]
        ],
        index: 'geoHaystack',
        required: true
      }
    },
    address: {
      type: {
        type: String,
        required: true
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        required: true
      }
    }
  },
  {
    versionKey: false
  }
);

export default mongoose.model('Partner', PartnerSchema);

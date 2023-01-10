import mongoose, {  Schema } from 'mongoose';

export interface IPartner {
  id: number;
  tradingName: {
    type: String,
    required: [true, 'Please add a partner trading name']
  };
  ownerName: {
    type: String,
    required: [true, 'Please add a partner owner name']
  };
  document: {
    type: String,
    required: [true, 'Please add a document'],
    unique: true
  };
  coverageArea: {
    type: string,
    coordinates: number[][][][];
  };
  address: {
    type: string;
    coordinates: number[];
  }
}

const partnerSchema = new mongoose.Schema ({
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
    type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true
      
    },
    coordinates: {
      type:[
          [[[Array], [Array], [Array], [Array] ] ],
          [ [ [Array], [Array], [Array], [Array], [Array] ]]
      ],
      index: 'geoHaystack',
      required: true
    }
  },
  address: {
    type: {
      type: String,
      required: true,
      coordinates: {
        type: [Number],
        required: true
      }
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    }
  }
});

partnerSchema.index({ address: '2dsphere' });

export default mongoose.model('Partner', partnerSchema);

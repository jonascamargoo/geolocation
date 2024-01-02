import mongoose, {  Schema } from 'mongoose';

export interface IPartner {
  id: number,
  tradingName: string,
  ownerName: string,
  document: string,
  coverageArea: {
    type: string,
    coordinates: number[][][][]
  },
  address: {
    type: string,
    coordinates: number[]
  }
}

// When I add the index: '2dsphere' field to coverageArea.coordinates, an error occurs, and the collection simply does not accept another partner. To resolve this, I need to select another name for the collection in export default mongoose.model('Partner', PartnerSchema) to export default mongoose.model('Brewery', PartnerSchema), for example, and delete the partners collection in MongoDB.

const partnerSchema: Schema = new mongoose.Schema ({
  partnerId: {
    type: Number,
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
    required: [true, 'Please add a document'],
    unique: true
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

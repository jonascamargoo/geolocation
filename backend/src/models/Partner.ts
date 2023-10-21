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

//Quando eu adiciono o campo index: '2dshpere' no coverageArea.coordinates, da erro e a coleção simplesmente não aceita outro parceiro. Para resolver, preciso selecionar outro nome para a coleção em export default mongoose.model('Partner', PartnerSchema) para export default mongoose.model('Brewery', PartnerSchema) por exemplo, e deletar a coleção partners no mongo.

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

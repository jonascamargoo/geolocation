import mongoose, { Schema } from 'mongoose';

export interface ICoordinates {
    coordinates: number[]
  }

const CoordinatesSchema: Schema = new mongoose.Schema(
    { coordinates: [Number] },
    { versionKey: false }
)

export default mongoose.model('Corrdinate', CoordinatesSchema);
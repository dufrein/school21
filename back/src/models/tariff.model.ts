import mongoose, { Schema, Document } from 'mongoose';

export interface ITariff extends Document {
  name: string;
  description: string;
  price: number;
  coursesIds: string[];
  features: string[];
}

const TariffSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coursesIds: { type: [String], default: [] },
  features: { type: [String], default: [] }
}, {
  timestamps: true
});

export default mongoose.model<ITariff>('Tariff', TariffSchema); 
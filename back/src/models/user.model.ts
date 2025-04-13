import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tariffId: string;
  lessonsProgress: string[];
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  tariffId: { type: String, required: true },
  lessonsProgress: { type: [String], default: [] }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema); 
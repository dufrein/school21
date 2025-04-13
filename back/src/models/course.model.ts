import mongoose, { Schema, Document } from 'mongoose';

export interface ITopic {
  id: string;
  title: string;
  description: string;
}

export interface ICourse extends Document {
  name: string;
  description: string;
  tariffId: string;
  topics: ITopic[];
  lessonsIds: string[];
  complexity: string;
}

const TopicSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tariffId: { type: String, required: true },
  topics: { type: [TopicSchema], default: [] },
  lessonsIds: { type: [String], default: [] },
  complexity: { type: String, required: true, enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] }
}, {
  timestamps: true
});

export default mongoose.model<ICourse>('Course', CourseSchema); 
import mongoose, { Schema, Document } from 'mongoose';

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

export interface IQuestion {
  text: string;
  lessonId: string;
  answers: IAnswer[];
}

export interface ILesson extends Document {
  title: string;
  theory: string;
  courseId: string;
  questions: IQuestion[];
  complexity: string;
}

const AnswerSchema: Schema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const QuestionSchema: Schema = new Schema({
  text: { type: String, required: true },
  lessonId: { type: String, required: true },
  answers: { type: [AnswerSchema], required: true }
});

const LessonSchema: Schema = new Schema({
  title: { type: String, required: true },
  theory: { type: String, required: true },
  courseId: { type: String, required: true },
  questions: { type: [QuestionSchema], default: [] },
  complexity: { type: String, required: true, enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] }
}, {
  timestamps: true
});

export default mongoose.model<ILesson>('Lesson', LessonSchema); 
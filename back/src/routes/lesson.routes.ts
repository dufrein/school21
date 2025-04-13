import express, { Request, Response } from 'express';
import Lesson from '../models/lesson.model';
import { ILesson } from '../types/lesson.types';

const router = express.Router();

// Get all lessons
router.get('/', async (req: Request, res: Response) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching lessons', error: errorMessage });
  }
});

// Get lesson by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching lesson', error: errorMessage });
  }
});

// Create lesson
router.post('/', async (req: Request<{}, {}, ILesson>, res: Response) => {
  try {
    const lesson = new Lesson(req.body);
    const savedLesson = await lesson.save();
    res.status(201).json(savedLesson);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error creating lesson', error: errorMessage });
  }
});

// Update lesson
router.put('/:id', async (req: Request<{ id: string }, {}, ILesson>, res: Response) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error updating lesson', error: errorMessage });
  }
});

// Delete lesson
router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error deleting lesson', error: errorMessage });
  }
});

export default router; 
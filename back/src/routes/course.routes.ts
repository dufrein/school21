import express, { Request, Response, Router } from 'express';
import Course from '../models/course.model';
import { ICourse } from '../types/course.types';

const router = express.Router();

type CourseRequestHandler = (req: Request, res: Response) => Promise<void>;

// Get all courses
router.get('/', (async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching courses', error: errorMessage });
  }
}) as CourseRequestHandler);

// Get course by ID
router.get('/:id', (async (req: Request<{ id: string }>, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error fetching course', error: errorMessage });
  }
}) as CourseRequestHandler);

// Create course
router.post('/', (async (req: Request<{}, {}, ICourse>, res: Response) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    res.status(201).json(savedCourse);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error creating course', error: errorMessage });
  }
}) as CourseRequestHandler);

// Update course
router.put('/:id', (async (req: Request<{ id: string }, {}, ICourse>, res: Response) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(400).json({ message: 'Error updating course', error: errorMessage });
  }
}) as CourseRequestHandler);

// Delete course
router.delete('/:id', (async (req: Request<{ id: string }>, res: Response) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ message: 'Error deleting course', error: errorMessage });
  }
}) as CourseRequestHandler);

export default router; 
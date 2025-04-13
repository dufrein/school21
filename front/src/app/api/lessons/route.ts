import { Lesson } from '@types';
import { NextResponse } from 'next/server';
import { lessons } from './mocks';

export async function GET(
  request: Request,
  { query }: { query: { courseId: string } }
) {
  try {
    const courseLessons = lessons.filter((lesson: Lesson) => lesson.courseId === query.courseId);
    return NextResponse.json(courseLessons);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch lessons' }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import { courses } from './mocks';

export async function GET() {
  try {
    return NextResponse.json(courses);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import { getUserProgress } from '@helpers/storage';

export async function GET() {
  try {
    const userProgress = getUserProgress();
    console.log('userProgress',userProgress);
    if (!userProgress) {
      return NextResponse.json({ error: 'User progress not found' }, { status: 404 });
    }
    
    return NextResponse.json(userProgress);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch user progress' }, { status: 500 });
  }
} 
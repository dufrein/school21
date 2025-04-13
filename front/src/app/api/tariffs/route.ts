import { NextResponse } from 'next/server';
import { tariffs } from './mocks';

export async function GET() {
  try {
    return NextResponse.json(tariffs);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tariffs' }, { status: 500 });
  }
} 
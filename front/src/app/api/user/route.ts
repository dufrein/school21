import { NextResponse } from 'next/server';
import { getUser } from '@helpers/storage';

export async function GET() {
  try {
    const user = getUser();
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
} 
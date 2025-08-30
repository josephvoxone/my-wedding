import { NextRequest } from 'next/server';

export const runtime = 'edge';

interface D1Database {
  prepare: (query: string) => {
    bind: (...values: any[]) => {
      all: () => Promise<{ results: any[] }>;
      run: () => Promise<any>;
      first: () => Promise<any>;
    };
    all: () => Promise<{ results: any[] }>;
    first: () => Promise<any>;
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // @ts-ignore - D1 binding from Cloudflare
    const db = process.env.DB as D1Database;
    
    if (!db) {
      return Response.json({ error: 'Database not configured' }, { status: 500 });
    }
    
    const { slug } = params;
    
    if (!slug) {
      return Response.json(
        { error: 'Guest slug is required' },
        { status: 400 }
      );
    }
    
    // Get guest info
    const guest = await db.prepare(
      "SELECT * FROM guests WHERE slug = ?"
    ).bind(slug).first();
    
    if (!guest) {
      return Response.json(
        { error: 'Guest not found' },
        { status: 404 }
      );
    }
    
    return Response.json({ guest });
  } catch (error) {
    console.error('Error fetching guest:', error);
    return Response.json(
      { error: 'Failed to fetch guest' },
      { status: 500 }
    );
  }
}
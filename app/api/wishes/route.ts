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

interface Env {
  DB: D1Database;
}

export async function GET(request: NextRequest) {
  try {
    // @ts-ignore - D1 binding from Cloudflare
    const db = process.env.DB as D1Database;
    
    if (!db) {
      return Response.json({ error: 'Database not configured' }, { status: 500 });
    }
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    
    // Get total count
    const countResult = await db.prepare(
      "SELECT COUNT(*) as total FROM wishes WHERE is_approved = 1"
    ).first();
    
    // Get paginated wishes
    const { results } = await db.prepare(
      `SELECT * FROM wishes 
       WHERE is_approved = 1 
       ORDER BY created_at DESC 
       LIMIT ? OFFSET ?`
    ).bind(limit, offset).all();
    
    return Response.json({
      wishes: results,
      pagination: {
        page,
        limit,
        total: countResult?.total || 0,
        totalPages: Math.ceil((countResult?.total || 0) / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching wishes:', error);
    return Response.json(
      { error: 'Failed to fetch wishes' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // @ts-ignore - D1 binding from Cloudflare
    const db = process.env.DB as D1Database;
    
    if (!db) {
      return Response.json({ error: 'Database not configured' }, { status: 500 });
    }
    
    const body = await request.json();
    const { guest_slug, guest_name, message, attendance_status } = body;
    
    // Validate input
    if (!guest_name || !message) {
      return Response.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }
    
    // Validate attendance status
    const validStatuses = ['hadir', 'tidak_hadir', 'masih_ragu'];
    if (attendance_status && !validStatuses.includes(attendance_status)) {
      return Response.json(
        { error: 'Invalid attendance status' },
        { status: 400 }
      );
    }
    
    // Insert wish
    await db.prepare(
      `INSERT INTO wishes (guest_slug, guest_name, message, attendance_status, is_approved) 
       VALUES (?, ?, ?, ?, 1)`
    ).bind(
      guest_slug || null,
      guest_name,
      message,
      attendance_status || null
    ).run();
    
    return Response.json({ 
      success: true,
      message: 'Ucapan berhasil dikirim!' 
    });
  } catch (error) {
    console.error('Error creating wish:', error);
    return Response.json(
      { error: 'Failed to create wish' },
      { status: 500 }
    );
  }
}
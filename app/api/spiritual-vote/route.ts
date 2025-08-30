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

export async function GET(request: NextRequest) {
  try {
    // @ts-ignore - D1 binding from Cloudflare
    const db = process.env.DB as D1Database;
    
    if (!db) {
      return Response.json({ error: 'Database not configured' }, { status: 500 });
    }
    
    // Get voting statistics
    const stats = await db.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN is_blessed = 1 THEN 1 ELSE 0 END) as blessed,
        SUM(CASE WHEN is_blessed = 0 THEN 1 ELSE 0 END) as not_blessed
      FROM spiritual_votes
    `).first();
    
    const total = stats?.total || 0;
    const blessed = stats?.blessed || 0;
    const notBlessed = stats?.not_blessed || 0;
    
    const blessedPercentage = total > 0 
      ? Math.round((blessed / total) * 100) 
      : 0;
    
    const notBlessedPercentage = total > 0 
      ? Math.round((notBlessed / total) * 100) 
      : 0;
    
    return Response.json({
      total,
      blessed,
      notBlessed,
      blessedPercentage,
      notBlessedPercentage
    });
  } catch (error) {
    console.error('Error fetching vote stats:', error);
    return Response.json(
      { error: 'Failed to fetch statistics' },
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
    const { guest_slug, is_blessed } = body;
    
    // Validate input
    if (typeof is_blessed !== 'boolean') {
      return Response.json(
        { error: 'Invalid vote value' },
        { status: 400 }
      );
    }
    
    // Get IP address for tracking (optional)
    const ip = request.headers.get('CF-Connecting-IP') || 
               request.headers.get('X-Forwarded-For') || 
               'unknown';
    
    // Use guest_slug or IP as unique identifier
    const identifier = guest_slug || `ip_${ip}`;
    
    // Insert or replace vote (one vote per guest/IP)
    await db.prepare(
      `INSERT OR REPLACE INTO spiritual_votes (guest_slug, is_blessed, ip_address, created_at) 
       VALUES (?, ?, ?, datetime('now'))`
    ).bind(
      identifier,
      is_blessed ? 1 : 0,
      ip
    ).run();
    
    // Get updated statistics
    const stats = await db.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN is_blessed = 1 THEN 1 ELSE 0 END) as blessed
      FROM spiritual_votes
    `).first();
    
    const total = stats?.total || 0;
    const blessed = stats?.blessed || 0;
    const percentage = total > 0 
      ? Math.round((blessed / total) * 100) 
      : 0;
    
    return Response.json({ 
      success: true,
      message: 'Terima kasih atas feedback Anda!',
      stats: {
        total,
        blessed,
        percentage
      }
    });
  } catch (error) {
    console.error('Error recording vote:', error);
    return Response.json(
      { error: 'Failed to record vote' },
      { status: 500 }
    );
  }
}
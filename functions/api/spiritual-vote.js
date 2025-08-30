export async function onRequestGet({ env }) {
  try {
    if (!env.DB) {
      // Return mock data for local dev
      return new Response(JSON.stringify({
        total: 245,
        blessed: 213,
        notBlessed: 32,
        blessedPercentage: 87,
        notBlessedPercentage: 13
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get voting statistics
    const stats = await env.DB.prepare(`
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
    
    return new Response(JSON.stringify({
      total,
      blessed,
      notBlessed,
      blessedPercentage,
      notBlessedPercentage
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching vote stats:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch statistics' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) {
      // Return mock success for local dev
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Terima kasih atas feedback Anda! (Local mode)',
        stats: {
          total: 246,
          blessed: 214,
          percentage: 87
        }
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const body = await request.json();
    const { guest_slug, is_blessed } = body;
    
    // Validate input
    if (typeof is_blessed !== 'boolean') {
      return new Response(JSON.stringify({ error: 'Invalid vote value' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get IP address for tracking (optional)
    const ip = request.headers.get('CF-Connecting-IP') || 
               request.headers.get('X-Forwarded-For') || 
               'unknown';
    
    // Use guest_slug or IP as unique identifier
    const identifier = guest_slug || `ip_${ip}`;
    
    // Insert or replace vote (one vote per guest/IP)
    await env.DB.prepare(
      `INSERT OR REPLACE INTO spiritual_votes (guest_slug, is_blessed, ip_address, created_at) 
       VALUES (?, ?, ?, datetime('now'))`
    ).bind(
      identifier,
      is_blessed ? 1 : 0,
      ip
    ).run();
    
    // Get updated statistics
    const stats = await env.DB.prepare(`
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
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Terima kasih atas feedback Anda!',
      stats: {
        total,
        blessed,
        percentage
      }
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error recording vote:', error);
    return new Response(JSON.stringify({ error: 'Failed to record vote' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
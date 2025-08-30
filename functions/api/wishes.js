export async function onRequestGet({ request, env }) {
  try {
    if (!env.DB) {
      // Return empty wishes for local dev
      return new Response(JSON.stringify({
        wishes: [],
        pagination: {
          page: 1,
          limit: 20,
          total: 0,
          totalPages: 0
        }
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;
    
    // Get total count
    const countResult = await env.DB.prepare(
      "SELECT COUNT(*) as total FROM wishes WHERE is_approved = 1"
    ).first();
    
    // Get paginated wishes
    const { results } = await env.DB.prepare(
      `SELECT * FROM wishes 
       WHERE is_approved = 1 
       ORDER BY created_at DESC 
       LIMIT ? OFFSET ?`
    ).bind(limit, offset).all();
    
    return new Response(JSON.stringify({
      wishes: results,
      pagination: {
        page,
        limit,
        total: countResult?.total || 0,
        totalPages: Math.ceil((countResult?.total || 0) / limit)
      }
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching wishes:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch wishes' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) {
      // For local dev, just return success
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Ucapan berhasil dikirim! (Local mode - not saved)' 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const body = await request.json();
    const { guest_slug, guest_name, message, attendance_status } = body;
    
    // Validate input
    if (!guest_name || !message) {
      return new Response(JSON.stringify({ error: 'Name and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate attendance status
    const validStatuses = ['hadir', 'tidak_hadir', 'streaming'];
    if (attendance_status && !validStatuses.includes(attendance_status)) {
      return new Response(JSON.stringify({ error: 'Invalid attendance status' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Insert wish with current timestamp
    await env.DB.prepare(
      `INSERT INTO wishes (guest_slug, guest_name, message, attendance_status, is_approved, created_at) 
       VALUES (?, ?, ?, ?, 1, datetime('now'))`
    ).bind(
      guest_slug || null,
      guest_name,
      message,
      attendance_status || null
    ).run();
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Ucapan berhasil dikirim!' 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error creating wish:', error);
    return new Response(JSON.stringify({ error: 'Failed to create wish' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
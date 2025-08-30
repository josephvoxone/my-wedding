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

// Local fallback data for development
const localGuestData: Record<string, any> = {
  'djordi': {
    name: 'Djordi',
    nickname: 'Djordi',
    special_message: 'Halo bosq, pedas, manis dan sing seger-seger kita rasakan, kwkwkw terima kasih sudah menjadi teman dan pendengar yang baik, saling menajamkan satu sama lain, kita ditempatkan di orang-orang yang percaya Tuhan supaya kita diasah dan ditempa menjadi lebih baik. Usaha dan bisnis kita di IT semoga diberikan pintu buat Tuhan bukakan 1000x\n\nI`m so grateful untuk perjalanan kita, dan Thank you bukan hanya teman, tapi teman yang awesome, ditunggu awakmu mbe ailen!'
  },
  'andy': {
    name: 'Andy',
    nickname: 'Andy',
    special_message: 'Terima kasih sudah menjadi teman baik bagian perjalanan hidupku. Perjalanan kita bersama telah membentuk siapa kita hari ini, pedas, manis, bahagia, kecewa dan aku sangat bersyukur untuk hal yang kita lakukan, dukungan, dan persaudaraan yang telah kita bangun bersama kwkwkw.\n\nKehadiranmu di hari bahagia kami akan melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan juga menyertai perjalanan hidupmu ndy dan kamu dapat menemukan apa yang kamu cari!.'
  },
  'liko-elyn': {
    name: 'Liko & Elyn',
    nickname: 'Liko & Elyn',
    special_message: 'Halo ce Elyn dan ko Liko, terima kasih sudah mengajarkan aku banyak hal, aku percaya kita ketemu bukan suatu kebetulan. Terima kasih juga menjadi cerminan keluarga yang baik didalam Tuhan sebelum aku menikah, hehe. Terima kasih banyak pokoknya sudah bantu banyak hal dan membukakan pintu jawaban untuk aku dari Tuhan. Sudah membantu dan menjadi terang buat aku.\n\nSelama di dubai aku melihat prespektif yang baru didalam hidup aku, Terima kasih yang tidak terhingga 😊, sebentar lagi kami akan menikah, kami tunggu kehadiran atau nonton streaming. May Liko`s family always be blessed and guided by the Lord'
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // @ts-ignore - D1 binding from Cloudflare
    const db = process.env.DB as D1Database;
    
    // Local development fallback
    if (!db) {
      // In local dev, return hardcoded data
      const guestInfo = localGuestData[params.slug];
      if (guestInfo) {
        return Response.json({ 
          guest: {
            id: 1,
            slug: params.slug,
            name: guestInfo.name,
            nickname: guestInfo.nickname,
            special_message: guestInfo.special_message,
            created_at: new Date().toISOString()
          }
        });
      }
      // If not in hardcoded data, just return the slug as name
      return Response.json({ 
        guest: {
          id: 1,
          slug: params.slug,
          name: params.slug,
          nickname: params.slug,
          special_message: null,
          created_at: new Date().toISOString()
        }
      });
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
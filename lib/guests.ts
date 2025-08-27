// Guest data management
// You can use either local CSV or Google Sheets

export interface Guest {
  slug: string // Primary key - URL-friendly identifier (required)
  name?: string
  nickname?: string
  specialMessage?: string // Personal message to show in the invitation
  imagePath?: string // Path to guest's photo (optional)
}

// Hardcoded guest list for now (will be replaced with CSV import when webpack is configured)
// To update guest list, edit /data/guests.csv
export const guestList: Guest[] = [
  {
    slug: 'budi-santoso',
    name: 'Budi Santoso',
    nickname: 'Budi',
    specialMessage: 'Terima kasih sudah menjadi sahabat terbaik sejak SMA! Kehadiranmu sangat berarti.',
    imagePath: '/assets/guests/budi.jpg'
  },
  {
    slug: 'tante-siti',
    name: 'Siti Nurhaliza',
    nickname: 'Tante Siti',
    specialMessage: 'Terima kasih sudah menjadi bagian dari keluarga kami.'
  },
  {
    slug: 'ahmad',
    name: 'Ahmad Fauzi',
    nickname: 'Ahmad',
    specialMessage: 'Bro, thanks for everything!'
  },
  {
    slug: 'keluarga-wijaya',
    name: 'Keluarga Bpk Wijaya'
  },
  {
    slug: 'sarah',
    name: 'Sarah Johnson',
    nickname: 'Sarah',
    specialMessage: 'Can\'t wait to celebrate with you!',
    imagePath: '/assets/guests/sarah.jpg'
  },
  {
    slug: 'pak-direktur',
    name: 'Bapak Sutomo',
    nickname: 'Pak Sutomo',
    specialMessage: 'Terima kasih atas bimbingannya selama ini.'
  },
  {
    slug: 'general'
  }
]

// Function to find guest by slug (primary key)
export function findGuest(slugParam: string): Guest | undefined {
  if (!slugParam) return undefined
  
  const searchSlug = slugParam.toLowerCase().trim()
  
  // First try exact match by slug
  const exactMatch = guestList.find(guest => guest.slug === searchSlug)
  if (exactMatch) return exactMatch
  
  // Fallback: try to find by name or nickname for backward compatibility
  return guestList.find(guest => 
    guest.name?.toLowerCase().includes(searchSlug) ||
    guest.nickname?.toLowerCase().includes(searchSlug)
  )
}

// Function to get personalized greeting
export function getPersonalizedGreeting(guest: Guest | undefined, language: 'id' | 'en'): string {
  if (!guest) {
    return language === 'id' 
      ? 'Kepada Yth. Tamu Undangan'
      : 'Dear Guest'
  }
  
  const greeting = language === 'id' ? 'Kepada Yth.' : 'Dear'
  
  return `${greeting} ${guest.nickname || guest.name || 'Tamu Undangan'}`
}

// Function to get special message for guest
export function getSpecialMessage(guest: Guest | undefined): string | null {
  if (!guest || !guest.specialMessage) return null
  return guest.specialMessage
}

// Function to get guest image path
export function getGuestImage(guest: Guest | undefined): string | null {
  if (!guest || !guest.imagePath) return null
  return guest.imagePath
}

// Option 2: Using Google Sheets
// To use Google Sheets:
// 1. Create a public Google Sheet with your guest data
// 2. Publish it as CSV (File > Share > Publish to web > CSV)
// 3. Add the URL to .env.local as NEXT_PUBLIC_GOOGLE_SHEET_URL
// 4. The system will automatically fetch from Google Sheets

export async function fetchGuestsFromGoogleSheets(): Promise<Guest[]> {
  try {
    const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || ''
    
    if (!SHEET_URL) {
      console.log('Using static guest list - no Google Sheet URL provided')
      return guestList
    }
    
    const response = await fetch(SHEET_URL)
    const csvText = await response.text()
    
    // Parse CSV with new structure
    const rows = csvText.split('\n').slice(1) // Skip header row
    const guests: Guest[] = rows
      .filter(row => row.trim())
      .map((row) => {
        const [slug, name, nickname, specialMessage, imagePath] = 
          row.split(',').map(cell => cell.trim().replace(/^"|"$/g, ''))
        
        return {
          slug: slug || '',
          name: name || undefined,
          nickname: nickname || undefined,
          specialMessage: specialMessage || undefined,
          imagePath: imagePath || undefined,
        }
      })
      .filter(guest => guest.slug) // Only keep guests with slug
    
    return guests
  } catch (error) {
    console.error('Error fetching guest data from Google Sheets:', error)
    return guestList // Fallback to static list
  }
}
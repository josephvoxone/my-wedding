// Guest data management
// You can use either CSV or Google Sheets

export interface Guest {
  id: string
  name: string
  nickname?: string
  side: 'groom' | 'bride'
  tableNumber?: number
  specialMessage?: string
  phoneNumber?: string
  expectedGuests?: number
  group?: string // Family, Friends, Colleague, etc
  vip?: boolean
  customGreeting?: string
}

// Option 1: Static CSV/JSON data (easier to start with)
export const guestList: Guest[] = [
  // Example guests - replace with your actual guest list
  {
    id: '001',
    name: 'Budi Santoso',
    nickname: 'Budi',
    side: 'groom',
    tableNumber: 1,
    specialMessage: 'Terima kasih sudah menjadi sahabat terbaik!',
    phoneNumber: '08123456789',
    expectedGuests: 2,
    group: 'Friends',
    vip: true,
    customGreeting: 'Hai Budi! Kamu adalah sahabat terbaik yang pernah kumiliki.'
  },
  {
    id: '002',
    name: 'Siti Nurhaliza',
    nickname: 'Siti',
    side: 'bride',
    tableNumber: 2,
    specialMessage: 'Senang sekali kamu bisa datang!',
    phoneNumber: '08234567890',
    expectedGuests: 3,
    group: 'Family',
    vip: true,
    customGreeting: 'Hai Tante Siti! Terima kasih sudah menjadi bagian dari keluarga kami.'
  },
  {
    id: '003',
    name: 'Ahmad Fauzi',
    nickname: 'Ahmad',
    side: 'groom',
    tableNumber: 3,
    specialMessage: 'Teman seperjuangan dari SMA!',
    phoneNumber: '08345678901',
    expectedGuests: 1,
    group: 'Friends',
    customGreeting: 'Bro Ahmad! Akhirnya hari ini tiba juga!'
  },
  // Add more guests here...
]

// Function to find guest by name or nickname
export function findGuest(nameParam: string): Guest | undefined {
  if (!nameParam) return undefined
  
  const searchName = nameParam.toLowerCase().trim()
  
  return guestList.find(guest => 
    guest.name.toLowerCase().includes(searchName) ||
    guest.nickname?.toLowerCase().includes(searchName) ||
    guest.id === searchName
  )
}

// Function to get personalized greeting
export function getPersonalizedGreeting(guest: Guest | undefined, language: 'id' | 'en'): string {
  if (!guest) {
    return language === 'id' 
      ? 'Kepada Yth. Tamu Undangan'
      : 'Dear Guest'
  }
  
  if (guest.customGreeting) {
    return guest.customGreeting
  }
  
  const greeting = language === 'id' ? 'Kepada Yth.' : 'Dear'
  const title = guest.vip ? (language === 'id' ? 'Bapak/Ibu' : 'Mr./Mrs.') : ''
  
  return `${greeting} ${title} ${guest.nickname || guest.name}`
}

// Function to get table assignment message
export function getTableMessage(guest: Guest | undefined, language: 'id' | 'en'): string | null {
  if (!guest || !guest.tableNumber) return null
  
  return language === 'id'
    ? `Anda akan ditempatkan di Meja ${guest.tableNumber}`
    : `You will be seated at Table ${guest.tableNumber}`
}

// Option 2: Google Sheets Integration
// To use Google Sheets:
// 1. Create a public Google Sheet with your guest data
// 2. Publish it as CSV (File > Share > Publish to web > CSV)
// 3. Use the URL below to fetch data

export async function fetchGuestsFromGoogleSheets(): Promise<Guest[]> {
  try {
    // Replace with your actual Google Sheets CSV URL
    // Format: https://docs.google.com/spreadsheets/d/SHEET_ID/export?format=csv
    const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || ''
    
    if (!SHEET_URL) {
      console.log('Using static guest list - no Google Sheet URL provided')
      return guestList
    }
    
    const response = await fetch(SHEET_URL)
    const csvText = await response.text()
    
    // Parse CSV
    const rows = csvText.split('\n').slice(1) // Skip header row
    const guests: Guest[] = rows
      .filter(row => row.trim())
      .map((row, index) => {
        const [
          name,
          nickname,
          side,
          tableNumber,
          specialMessage,
          phoneNumber,
          expectedGuests,
          group,
          vip,
          customGreeting
        ] = row.split(',').map(cell => cell.trim().replace(/^"|"$/g, ''))
        
        return {
          id: (index + 1).toString().padStart(3, '0'),
          name,
          nickname: nickname || undefined,
          side: (side?.toLowerCase() === 'bride' ? 'bride' : 'groom') as 'groom' | 'bride',
          tableNumber: tableNumber ? parseInt(tableNumber) : undefined,
          specialMessage: specialMessage || undefined,
          phoneNumber: phoneNumber || undefined,
          expectedGuests: expectedGuests ? parseInt(expectedGuests) : undefined,
          group: group || undefined,
          vip: vip?.toLowerCase() === 'true' || vip?.toLowerCase() === 'yes',
          customGreeting: customGreeting || undefined,
        }
      })
    
    return guests
  } catch (error) {
    console.error('Error fetching guests from Google Sheets:', error)
    return guestList // Fallback to static list
  }
}

// Export function to generate invitation links
export function generateInvitationLink(guest: Guest, baseUrl: string = ''): string {
  const url = new URL(baseUrl || 'https://wedding-joseph-ayu.com')
  url.searchParams.set('to', guest.nickname || guest.name)
  
  if (guest.specialMessage) {
    url.searchParams.set('message', guest.specialMessage)
  }
  
  if (guest.tableNumber) {
    url.searchParams.set('table', guest.tableNumber.toString())
  }
  
  url.searchParams.set('id', guest.id)
  
  return url.toString()
}
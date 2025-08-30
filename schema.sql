-- Guests table (imported from CSV)
CREATE TABLE IF NOT EXISTS guests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  nickname TEXT,
  special_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Wishes/RSVP table
CREATE TABLE IF NOT EXISTS wishes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guest_slug TEXT,
  guest_name TEXT NOT NULL,
  message TEXT NOT NULL,
  attendance_status TEXT CHECK(attendance_status IN ('hadir', 'tidak_hadir', 'masih_ragu')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_approved INTEGER DEFAULT 1,
  FOREIGN KEY (guest_slug) REFERENCES guests(slug)
);

-- Spiritual journey voting table
CREATE TABLE IF NOT EXISTS spiritual_votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guest_slug TEXT,
  is_blessed INTEGER NOT NULL CHECK(is_blessed IN (0, 1)),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  UNIQUE(guest_slug)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_wishes_created_at ON wishes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wishes_guest_slug ON wishes(guest_slug);
CREATE INDEX IF NOT EXISTS idx_spiritual_votes_guest_slug ON spiritual_votes(guest_slug);
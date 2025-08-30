#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Read and parse CSV file
const csvPath = path.join(__dirname, '../data/guests.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  relax_column_count: true, // Allow rows with fewer columns
  skip_records_with_empty_values: true
});

// Generate SQL statements
const sqlStatements = [];

// Create table if not exists
sqlStatements.push(`
-- Create guests table if not exists
CREATE TABLE IF NOT EXISTS guests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  nickname TEXT,
  special_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing data (optional - comment out if you want to keep existing data)
DELETE FROM guests;
`);

// Insert statements for each guest
records.forEach((record) => {
  // Skip the general entry or empty rows
  if (!record.slug || record.slug === 'general') {
    return;
  }
  
  // Escape single quotes in text fields
  const escapeQuotes = (str) => {
    return str ? str.replace(/'/g, "''") : null;
  };
  
  const slug = escapeQuotes(record.slug);
  const name = escapeQuotes(record.name);
  const nickname = escapeQuotes(record.nickname);
  const specialMessage = escapeQuotes(record.specialMessage);
  
  sqlStatements.push(`
INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('${slug}', '${name}', ${nickname ? `'${nickname}'` : 'NULL'}, ${specialMessage ? `'${specialMessage}'` : 'NULL'});`);
});

// Write SQL file
const sqlPath = path.join(__dirname, '../import-guests.sql');
fs.writeFileSync(sqlPath, sqlStatements.join('\n'));

console.log('✅ SQL import file generated successfully!');
console.log(`📄 File saved to: ${sqlPath}`);
console.log(`📊 Total guests to import: ${records.filter(r => r.slug && r.slug !== 'general').length}`);
console.log('\n📝 To import to your D1 database, run:');
console.log('   npx wrangler d1 execute wedding-database --local --file=./import-guests.sql');
console.log('\n   For production:');
console.log('   npx wrangler d1 execute wedding-database --remote --file=./import-guests.sql');
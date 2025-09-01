# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

### Installation
- `npm install` - Install all dependencies

## Architecture Overview

This is a Next.js 14 wedding website using the App Router architecture. The site is a single-page application with animated sections showcasing wedding details.

### Technology Stack
- **Next.js 14.2.0** with App Router for the framework
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom wedding theme extensions
- **Framer Motion** for scroll-triggered animations
- **Howler.js** for background music playback
- **Lenis** for smooth scrolling effects

### Component Structure
The main page (`app/page.tsx`) orchestrates these sections in order:
1. **CloudAnimation** - Floating background clouds
2. **MusicPlayer** - Background music with volume controls
3. **Hero** - Couple names and wedding date
4. **OurStory** - Couple's journey timeline
5. **EventDetails** - Ceremony and reception information
6. **Gallery** - Photo grid with hover effects
7. **RSVP** - Contact form
8. **Footer** - Closing message

### Styling Approach
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- Custom colors: `cloud`, `sky-light`, `gold-soft`
- Wedding fonts: Caveat, Dancing Script, Pacifico, Satisfy
- Glass morphism effects using backdrop-blur
- Custom animations: `float`, `float-delayed`, `fade-in`

### Key Implementation Notes
- All interactive components use `'use client'` directive
- Smooth scrolling is wrapped in LenisProvider
- Images are optimized through Next.js Image component
- Music file should be placed at `public/music/wedding-song.mp3`
- No external APIs or databases - all content is static

### Path Aliases
- `@/*` maps to the root directory for imports

## Database Management (Cloudflare D1)

### CRITICAL: Guest Data Updates
When updating guest data, **NEVER DELETE OTHER TABLES**. Only the `guests` table should be modified.

**Correct procedure for updating guests:**
```bash
# 1. Delete ONLY guests table data (preserves wishes and spiritual_votes)
CLOUDFLARE_ACCOUNT_ID=d0e7e4244a29fb11989a7d552a82336b npx wrangler d1 execute wedding-database --remote --command="DELETE FROM guests;"

# 2. Import new guest data
CLOUDFLARE_ACCOUNT_ID=d0e7e4244a29fb11989a7d552a82336b npx wrangler d1 execute wedding-database --remote --file=./import-guests.sql
```

**NEVER do this:**
```bash
# WRONG - This deletes all data including wishes!
DELETE FROM wishes; DELETE FROM spiritual_votes; DELETE FROM guests;
```

### Database Schema
- **guests** table: Contains guest information with personalized messages
- **wishes** table: Stores RSVP and wishes from guests (MUST BE PRESERVED)
- **spiritual_votes** table: Voting data (MUST BE PRESERVED)

### Important Notes
- The `wishes` and `spiritual_votes` tables contain user-submitted data that must never be deleted during guest updates
- Guest updates should only affect the `guests` table
- Always verify data integrity after updates using COUNT queries
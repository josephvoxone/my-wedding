export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Wedding of Joseph Shandy Harvian & Ayu Lestari",
    "description": "Pernikahan Joseph Shandy Harvian dan Ayu Lestari pada tanggal 9 September 2025 di SM Tower Hotel Convention Centre, Berau, Kalimantan Timur",
    "startDate": "2025-09-09T09:00:00+08:00",
    "endDate": "2025-09-09T21:00:00+08:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "SM Tower Hotel Convention Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Teuku Umar No.RT 09, Gayam",
        "addressLocality": "Tanjung Redeb",
        "addressRegion": "Berau",
        "addressCountry": "ID",
        "postalCode": "77315"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "2.165278",
        "longitude": "117.483611"
      }
    },
    "image": [
      "https://www.josephayu.com/assets/wedding/with-us.jpg",
      "https://www.josephayu.com/assets/wedding/stare.jpeg",
      "https://www.josephayu.com/assets/wedding/mirror.jpg"
    ],
    "organizer": [
      {
        "@type": "Person",
        "name": "Joseph Shandy Harvian",
        "url": "https://www.josephayu.com"
      },
      {
        "@type": "Person",
        "name": "Ayu Lestari",
        "url": "https://www.josephayu.com"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "url": "https://www.josephayu.com"
    },
    "performer": {
      "@type": "Person",
      "name": "Joseph Shandy Harvian & Ayu Lestari"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
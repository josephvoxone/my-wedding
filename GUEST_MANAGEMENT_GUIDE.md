# Guest Management Guide for Joseph & Ayu's Wedding Website

## Overview
This system allows you to manage personalized invitations for each guest with custom messages, table assignments, and more.

## Option 1: Using CSV File (Simple)

### Steps:
1. Edit the file `/public/data/guests-template.csv` 
2. Add your guests following the format
3. Import the data in `/lib/guests.ts`

### CSV Columns:
- **name**: Full name of the guest
- **nickname**: Short name for greeting (optional)
- **side**: Either "groom" or "bride"
- **tableNumber**: Table assignment (optional)
- **specialMessage**: Personal message for this guest (optional)
- **phoneNumber**: Contact number (optional)
- **expectedGuests**: How many people they might bring
- **group**: Category like Family, Friends, Colleague
- **vip**: true/false for special guests
- **customGreeting**: Completely custom greeting message (optional)

## Option 2: Using Google Sheets (Recommended) 

### Initial Setup:

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Wedding Guest List - Joseph & Ayu"

2. **Set up columns** (Row 1):
   ```
   A: name
   B: nickname
   C: side
   D: tableNumber
   E: specialMessage
   F: phoneNumber
   G: expectedGuests
   H: group
   I: vip
   J: customGreeting
   ```

3. **Add your guest data** starting from Row 2

4. **Publish as CSV**:
   - Go to File → Share → Publish to web
   - Choose "Entire Document"
   - Select "Comma-separated values (.csv)"
   - Click "Publish"
   - Copy the generated URL

5. **Add URL to your website**:
   - Create a `.env.local` file in your project root
   - Add: `NEXT_PUBLIC_GOOGLE_SHEET_URL=your_csv_url_here`

### Example Google Sheet Structure:

| name | nickname | side | tableNumber | specialMessage | phoneNumber | expectedGuests | group | vip | customGreeting |
|------|----------|------|-------------|----------------|-------------|----------------|-------|-----|----------------|
| Budi Santoso | Budi | groom | 1 | Terima kasih sudah menjadi sahabat terbaik! | 08123456789 | 2 | Friends | true | Hai Budi! Kamu adalah sahabat terbaik yang pernah kumiliki. |
| Siti Nurhaliza | Siti | bride | 2 | Senang sekali kamu bisa datang! | 08234567890 | 3 | Family | true | Hai Tante Siti! Terima kasih sudah menjadi bagian dari keluarga kami. |

## Generating Invitation Links

Each guest will get a personalized link like:
```
https://your-website.com?to=Budi&message=Terima%20kasih%20sudah%20menjadi%20sahabat%20terbaik&table=1&id=001
```

### Features of Personalized Links:
- Custom greeting with guest's name
- Special message display
- Table number information
- Track who opened the invitation
- Pre-filled RSVP form

## How to Send Invitations

### Method 1: Manual WhatsApp
```
Hi [Name]! 

Kami mengundang Anda ke pernikahan kami 💍

Klik link berikut untuk membuka undangan digital:
[personalized_link]

Terima kasih!
Joseph & Ayu
```

### Method 2: Bulk WhatsApp (using WhatsApp Business API or third-party tools)
- Export the guest list with generated links
- Use bulk messaging tools
- Include the personalized link for each guest

### Method 3: Email
- Use mail merge with the CSV data
- Include the personalized link in the email

## Managing Guest Data

### To Update Guest Information:
1. **CSV Method**: Edit the CSV file and redeploy
2. **Google Sheets**: Just edit the sheet - changes reflect immediately

### To Track RSVPs:
- RSVPs will be sent to the WhatsApp numbers specified in the code
- Consider adding a Google Form for RSVP tracking
- Or create a simple database to store responses

## Tips for Guest Management

1. **Categories to Consider**:
   - Immediate family (VIP)
   - Extended family
   - Close friends
   - Work colleagues
   - Neighbors
   - Community members

2. **Table Assignment Strategy**:
   - Group families together
   - Mix both sides for integration
   - Keep friend groups together
   - Consider age groups

3. **Special Messages Ideas**:
   - Childhood friends: "Dari main bareng sampai nikah bareng!"
   - Family: "Terima kasih sudah mendukung kami selama ini"
   - Colleagues: "Rekan kerja yang luar biasa!"
   - Mentors: "Terima kasih atas bimbingan Bapak/Ibu"

4. **VIP Guests**:
   - Parents
   - Grandparents
   - Siblings
   - Best friends
   - Important mentors/bosses

## Privacy & Security

- Don't include sensitive information in the CSV
- Use nicknames instead of full titles if needed
- Phone numbers are optional (only for RSVP tracking)
- Consider making the Google Sheet view-only

## Testing

Before sending to all guests:
1. Create test entries for yourself
2. Generate links and test all features
3. Check personalization works correctly
4. Test on different devices
5. Verify RSVP system works

## Need Help?

If you need help setting this up:
1. Start with a few test guests
2. Use the CSV method first (simpler)
3. Move to Google Sheets when comfortable
4. Test with family members first

Good luck with your wedding preparations! 🎉💑
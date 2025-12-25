# Theme Update - Maroon Color Scheme with Background Images

## Changes Made

### 1. Color Scheme
- **Old Colors**: Navy Blue (#1E3A8A) and Orange (#F59E0B)
- **New Color**: Maroon
  - Primary: `hsl(0 60% 35%)` - Dark Maroon
  - Accent: `hsl(0 60% 35%)` - Maroon
  - All buttons, cards, and key elements now use maroon color

### 2. Background Images
Added background images to all major sections:

#### Hero Section
- **Image**: Freight trucks on highway
- **Overlay**: Black 60% opacity (`bg-black/60`)
- **Text**: White color for contrast

#### "How We Work" Section
- **Image**: Logistics and warehouse
- **Overlay**: Black 70% opacity (`bg-black/70`)
- **Text**: White color for contrast

#### Call-to-Action Section
- **Image**: Shipping containers
- **Overlay**: Black 65% opacity (`bg-black/65`)
- **Text**: White color for contrast

### 3. Design Improvements
- Changed all button colors from orange to maroon
- Updated card icon backgrounds from orange to maroon
- Added hover effects to cards (`hover:shadow-lg transition-shadow`)
- Changed CheckCircle icons from accent (orange) to primary (maroon)
- Updated step number circles from accent to primary color
- Maintained white background for main content areas
- Cards with semi-transparent backgrounds on overlay sections (`bg-card/95 backdrop-blur`)

### 4. Content Language
- All UI elements remain in English
- Navigation: Home, About Us, Services, Contact
- Authentication: Login / Logout / Admin Dashboard
- Call-to-Action: Get a Quote, Contact Us
- All page content in English

## Files Modified

1. **src/index.css** - Complete maroon color scheme
2. **src/pages/HomePage.tsx** - Background images with overlays
3. **src/components/layouts/Header.tsx** - Updated navigation
4. **src/components/layouts/Footer.tsx** - Updated footer
5. **README.md** - Updated color scheme and design features

## Result

✅ Theme changed to maroon color
✅ Background images in all major sections
✅ Black overlays with white text for readability
✅ Clean white background for content areas
✅ All buttons and cards in maroon color
✅ Professional and modern design
✅ Excellent contrast and accessibility

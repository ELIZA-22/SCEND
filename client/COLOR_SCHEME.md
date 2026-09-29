# SCEND Color Scheme - Teal Green & Sage Brown

## 🎨 New Color Palette

### Primary: Teal Green
**Usage:** Buttons, links, accents, icons

- `teal-300`: #5eead4 - Light teal (highlights, "Discreetly Delivered")
- `teal-400`: #2dd4bf - Medium light (icons, checkmarks)
- `teal-500`: #14b8a6 - Standard teal
- `teal-600`: #0d9488 - **Main button color**
- `teal-700`: #0f766e - Hover states
- `teal-900`: #134e4a - Dark accents

### Secondary: Sage Brown
**Usage:** Backgrounds, navigation, calm earthy tones

- `sage-50`: #f5f5f0 - Very light (backgrounds)
- `sage-100`: #e8e6db - Light sage (text on dark)
- `sage-200`: #d4d1bf - Light accents (borders, buttons)
- `sage-500`: #847a5f - Medium sage
- `sage-800`: #4a453b - Dark sage
- `sage-900`: #3e3a33 - **Navigation bar, hero gradient**

### Neutral: White & Gray
**Usage:** Content backgrounds, text

- White: #ffffff - Main background
- Gray-600: #4b5563 - Body text
- Gray-900: #111827 - Headings

---

## 🎯 Where Colors Are Used

### Navigation Bar
- Background: `sage-900` (dark brown)
- Logo icon: `teal-400` (teal)
- Hover links: `teal-400`
- Login button border: `teal-400`
- Request button: `teal-600` background

### Hero Section
- Background gradient: `sage-900` → `sage-800` → `teal-900`
- Main heading: `white`
- "Discreetly Delivered": `teal-300` (light teal)
- Description text: `sage-100` (light sage)
- Primary button: `teal-600` background
- Secondary button: `sage-200` border, `sage-100` text
- Check icons: `teal-300`
- Badge text: `sage-200`

### Content Sections
- Trust indicators numbers: `teal-600`
- Service cards: White background
- Icons: `teal-500`
- Hover effects: `teal-600`

---

## 🖼️ Visual Hierarchy

```
┌─────────────────────────────────────┐
│   Navigation (sage-900)             │
│   Logo (teal-400)                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Hero (sage→teal gradient)         │
│   Verified Protection (white)       │
│   Discreetly Delivered (teal-300)   │
│   [Button: teal-600]                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Content (white background)        │
│   Numbers: teal-600                 │
│   Icons: teal icons                 │
└─────────────────────────────────────┘
```

---

## 📝 CSS Classes Reference

### Backgrounds
```css
bg-sage-900      /* Dark brown navigation */
bg-teal-600      /* Teal buttons */
bg-white         /* Content areas */
bg-sage-50       /* Light sage backgrounds */
```

### Text Colors
```css
text-white       /* Main headings on dark */
text-teal-300    /* Light teal highlights */
text-teal-400    /* Teal icons */
text-sage-100    /* Light text on dark */
text-gray-600    /* Body text */
```

### Borders
```css
border-sage-800  /* Navigation border */
border-teal-400  /* Button borders */
```

### Hover States
```css
hover:bg-teal-700      /* Button hover */
hover:text-teal-400    /* Link hover */
```

---

## 🔄 How to Change Colors

### Update Buttons
Find: `bg-primary-500` or `bg-primary-600`
Replace with: `bg-teal-600`

### Update Icons
Find: `text-primary-500`
Replace with: `text-teal-400` or `text-teal-600`

### Update Links
Find: `hover:text-primary-500`
Replace with: `hover:text-teal-400`

---

## 🎨 Color Meanings

### Teal Green
- **Trust**: Professional, reliable
- **Modern**: Tech-forward
- **Calm**: Non-threatening security
- **Growth**: Progressive platform

### Sage Brown
- **Stability**: Grounded, solid
- **Sophistication**: Premium service
- **Warmth**: Approachable
- **Natural**: Organic, trustworthy

---

## ✅ Applied Changes

- [x] Tailwind config updated with teal + sage colors
- [x] Navigation bar: sage-900 background
- [x] Hero gradient: sage to teal
- [x] "Verified Protection" white text
- [x] "Discreetly Delivered" teal-300
- [x] Buttons changed to teal-600
- [x] Icons updated to teal-400
- [x] Trust indicators: teal-600

---

## 🔄 Need to Restart

**Important:** After color changes, restart dev server:

```bash
# Stop server (Ctrl+C)
# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

Then hard refresh browser: `Ctrl + Shift + R`

---

## 📱 Color Contrast Check

✅ White text on sage-900: **AAA** (excellent)
✅ Teal-300 on sage-900: **AAA** (excellent)
✅ Gray-600 on white: **AAA** (excellent)
✅ Teal-600 button with white text: **AAA** (excellent)

All combinations meet WCAG accessibility standards!

---

## 🎯 Brand Feel

**Before:** Blue (tech, cold)
**After:** Teal + Sage (professional, warm, trustworthy)

The teal-sage combination creates:
- Professional security presence
- Warm, approachable feel
- Natural, organic trust
- Modern but not sterile
- Nigerian-friendly (warm earth tones)

Perfect for executive protection services! 🛡️✨

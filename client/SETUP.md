# SCEND Client - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd client
npm install
```

This will install:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)

### Step 2: Start Development Server
```bash
npm run dev
```

The application will start at **http://localhost:3000**

### Step 3: Open in Browser
Navigate to:
- **Homepage:** http://localhost:3000
- **Request Form:** http://localhost:3000/request

## 📁 What's Been Built

### ✅ Homepage (`/`)
A professional landing page featuring:
- Navigation with CTA buttons
- Hero section with value proposition
- Trust indicators (300+ professionals, 24/7 service)
- Services section (3 tiers: Personal, Corporate, Event)
- How it works (4-step process)
- Coverage areas (6 Nigerian cities)
- Call-to-action sections
- Footer with links

### ✅ Security Request Form (`/request`)
A comprehensive 4-step form:
- **Step 1:** Client information
  - Personal or Corporate client type
  - Name, email, phone, company
  
- **Step 2:** Security requirements
  - Service type selection
  - Location and dates
  - Number of personnel
  
- **Step 3:** Additional details
  - Protection level (Standard, Advanced, Elite)
  - Armed security preference
  - Protective driving needs
  - Risk assessment
  - Special requirements
  
- **Step 4:** Review & Submit
  - Summary of all details
  - Terms acceptance
  - Confidentiality agreement
  - Submit button

**Features:**
- Multi-step form with progress indicator
- Client-side validation
- Error handling with helpful messages
- Success confirmation page
- Responsive mobile design
- Back/Next navigation

## 🎨 Design Features

- **Color Scheme:** 
  - Primary: Blue (#0ea5e9)
  - Dark: Charcoal shades
  - Accent: Light blue highlights

- **Typography:** Inter font (clean, professional)

- **Icons:** Lucide React (Shield, CheckCircle, Clock, etc.)

- **Responsive:** Mobile-first design, works on all screen sizes

## 🇳🇬 Nigerian Market Customizations

✅ **Pricing in Naira**
- Standard: ₦45,000 - ₦75,000/day
- Advanced: ₦100,000 - ₦150,000/day
- Elite: ₦200,000 - ₦350,000/day
- Corporate packages: ₦800,000 - ₦15,000,000/month

✅ **Cities Covered**
- Lagos (150+ professionals)
- Abuja (80+ professionals)
- Port Harcourt (50+ professionals)
- Ibadan, Kano, Enugu

✅ **Local Contact**
- Phone format: 0800-XXX-XXXX
- Emergency: 0800-111-2222
- Address: Victoria Island, Lagos

✅ **Compliance References**
- NSCDC licensing mentioned
- Nigerian security context
- Local threat awareness

## 🔄 Next Development Steps

### Phase 1: Authentication (Week 1)
```bash
# To be built:
- /login page
- /signup page
- Authentication context
- Protected routes
```

### Phase 2: Dashboard (Week 2)
```bash
# To be built:
- /dashboard - Client overview
- /dashboard/requests - View all requests
- /dashboard/assignments - Active security details
- /dashboard/profile - Update profile
```

### Phase 3: Backend Integration (Week 3)
```bash
# Connect to API:
- Submit security requests to backend
- Fetch user data
- Real-time status updates
- Payment processing
```

### Phase 4: Additional Features (Week 4)
```bash
# Enhanced functionality:
- Chat with security team
- Document upload
- Real-time tracking
- Push notifications
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clean Next.js cache
rm -rf .next
npm run dev
```

## 📦 Package Scripts

```json
{
  "dev": "next dev",           // Development mode
  "build": "next build",       // Production build
  "start": "next start",       // Production server
  "lint": "next lint"          // Code linting
}
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Testing on Mobile

1. Find your local IP:
```bash
# Windows
ipconfig
# Look for IPv4 Address (e.g., 192.168.1.x)
```

2. Access from phone:
```
http://192.168.1.x:3000
```

3. Test the request form on mobile device

## 🎯 Key URLs

- Homepage: http://localhost:3000
- Request Form: http://localhost:3000/request
- About (to build): http://localhost:3000/about
- Login (to build): http://localhost:3000/login
- Dashboard (to build): http://localhost:3000/dashboard

## 💡 Development Tips

1. **Hot Reload:** Changes auto-refresh in browser
2. **Console:** Open DevTools (F12) to see errors
3. **Mobile View:** Use DevTools responsive mode
4. **API Calls:** Will show in Network tab
5. **State:** Use React DevTools extension

## 🚀 Ready to Code?

The foundation is built! Start by:
1. Running `npm run dev`
2. Opening http://localhost:3000
3. Testing the request form
4. Customizing colors/content
5. Building authentication next

## Need Help?

Check:
- README.md for detailed docs
- package.json for all dependencies
- tailwind.config.ts for styling
- app/ folder for all pages

**You're all set! Happy coding! 🎉**

# SCEND Client Platform

The client-facing web application for SCEND's executive protection platform.

## Features

### ✅ Completed
- **Landing Page** - Professional homepage with services, pricing, and coverage areas
- **Security Request Form** - Multi-step form for clients to request protection
- **Responsive Design** - Mobile-first design that works on all devices
- **Modern UI** - Built with Tailwind CSS and Lucide icons
- **Form Validation** - Client-side validation with error handling

### 🚧 In Progress
- User authentication (login/signup)
- Client dashboard
- Real-time request tracking
- Payment integration
- Profile management

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd client
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
client/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── request/
│       └── page.tsx          # Security request form
├── components/               # Reusable components (to be added)
├── lib/                      # Utility functions (to be added)
├── public/                   # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Walkthrough

### 1. Landing Page (`/`)
- Hero section with call-to-action
- Services overview (Personal, Corporate, Event)
- Nigerian pricing in Naira
- Coverage areas (Lagos, Abuja, Port Harcourt, etc.)
- How it works section
- Contact information

### 2. Security Request Form (`/request`)
- **Step 1:** Client information (name, email, phone, type)
- **Step 2:** Security requirements (location, dates, personnel)
- **Step 3:** Additional details (protection level, special needs)
- **Step 4:** Review and submit
- Form validation
- Progress indicator
- Success confirmation

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },  // Brand colors
  dark: { ... }      // Dark theme colors
}
```

### Content
- Update pricing in `/app/page.tsx`
- Modify form fields in `/app/request/page.tsx`
- Change contact info in footer section

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js
4. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

## Environment Variables

Create `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Next Steps

1. **Authentication:** Implement user login/signup
2. **Dashboard:** Build client dashboard for managing requests
3. **API Integration:** Connect to backend API
4. **Payment:** Integrate Flutterwave/Paystack
5. **Real-time:** Add WebSocket for live updates
6. **Notifications:** Email and SMS notifications
7. **Analytics:** Add Google Analytics or similar

## Nigerian Market Specifics

- All pricing displayed in Nigerian Naira (₦)
- Phone number format: Nigerian mobile (080XXXXXXXX)
- Major cities covered: Lagos, Abuja, Port Harcourt, Ibadan, Kano, Enugu
- Business hours: 24/7 emergency line
- Compliance: NSCDC licensing references

## Support

For questions or issues:
- Email: tech@scend.ng
- Phone: 0800-000-0000

## License

Private - SCEND Nigeria Limited © 2025

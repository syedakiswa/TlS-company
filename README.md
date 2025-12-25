# Shipping Broker Platform

A professional multi-page website for a shipping broker company operating in the United States and North America. The platform connects shippers with carriers, facilitating efficient freight brokerage and logistics solutions across the region.

## Features

### Public Pages
- **Home Page**: Hero section with company value proposition, features, how we work timeline, and services overview
- **About Us**: Company story, mission & vision, core values, and team member profiles
- **Services**: Detailed service offerings including freight brokerage, carrier matching, logistics consulting, and tracking & insurance
- **Contact**: Contact form with Formspree integration, contact details sidebar, and embedded Google Maps
- **Get a Quote**: Comprehensive quote request form with shipment details collection

### Admin Dashboard
- **Analytics Dashboard**: Real-time statistics with charts showing submission status distribution and types
- **Submissions Management**: View, search, filter, and manage contact forms and quote requests
- **Settings**: Application configuration and information
- **Authentication**: Secure login system with role-based access (admin/user)

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Backend**: Supabase (PostgreSQL database + Authentication)
- **Charts**: Recharts
- **Email**: Formspree integration
- **Routing**: React Router v6

## Color Scheme

- **Primary**: Maroon (#8B2635 / HSL: 0 60% 35%)
- **Accent**: Maroon (#8B2635 / HSL: 0 60% 35%)
- **Background**: White (#FFFFFF)
- **Text**: Dark Gray (#1A1A1A)

## Language

- **UI Language**: Urdu (اردو)
- All user-facing text, buttons, navigation, and content are in Urdu
- Admin dashboard remains in English for technical management

## Getting Started

### Prerequisites

```bash
Node.js ≥ 20
npm ≥ 10
```

### Installation

1. Extract the code package
2. Open the project in your IDE
3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev -- --host 127.0.0.1
```

Or alternatively:
```bash
npx vite --host 127.0.0.1
```

5. Open your browser and navigate to the provided local URL

## First Time Setup

### Create Admin Account

1. Navigate to the login page
2. Click on the "Sign Up" tab
3. Create your account with a username and password
4. **Important**: The first user to register will automatically become an admin

### Access Admin Dashboard

1. After logging in as admin, you'll see an "Admin Dashboard" button in the header
2. Click it to access the admin panel where you can:
   - View analytics and statistics
   - Manage contact submissions and quote requests
   - Update submission statuses
   - View detailed information about each submission

## Database

The application uses Supabase for backend services:

- **Authentication**: Username/password authentication (simulated email format)
- **Database Tables**:
  - `profiles`: User profiles with role management
  - `contact_submissions`: Contact form submissions
  - `quote_requests`: Quote request submissions
- **Row Level Security**: Enabled with policies for admin and user access

## Email Notifications

Contact forms and quote requests are configured to send email notifications via Formspree. The current endpoint is a placeholder - you should:

1. Sign up for a free Formspree account at https://formspree.io
2. Create a new form
3. Replace the Formspree endpoint in:
   - `src/pages/ContactPage.tsx`
   - `src/pages/QuotePage.tsx`

## Project Structure

```
src/
├── components/
│   ├── layouts/          # Header and Footer components
│   ├── ui/              # shadcn/ui components
│   └── common/          # RouteGuard and other common components
├── contexts/            # React contexts (AuthContext)
├── db/                  # Database configuration and API functions
│   ├── supabase.ts     # Supabase client
│   └── api.ts          # Database API functions
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ContactPage.tsx
│   ├── QuotePage.tsx
│   └── LoginPage.tsx
├── types/              # TypeScript type definitions
├── App.tsx             # Main app component
├── routes.tsx          # Route configuration
└── index.css           # Global styles and design tokens
```

## Development

### Running Lint

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

## Key Features Implementation

### Authentication
- Username/password authentication using Supabase Auth
- First registered user automatically becomes admin
- Role-based access control (admin/user)
- Protected routes with RouteGuard

### Forms
- React Hook Form for form management
- Zod schema validation
- Real-time validation feedback
- Formspree integration for email notifications
- Database storage for all submissions

### Admin Dashboard
- Real-time analytics with Recharts
- Submission management with search and filters
- Pagination for large datasets
- Status management (pending/completed)
- Detailed view dialogs for submissions

### Responsive Design
- Desktop-first approach
- Mobile-responsive navigation with hamburger menu
- Responsive tables and cards
- Touch-friendly interface elements

## Support

For more information, visit the Miaoda documentation:
https://intl.cloud.baidu.com/en/doc/MIAODA/s/download-and-building-the-app-en

## License

© 2025 Shipping Broker Platform. All rights reserved.

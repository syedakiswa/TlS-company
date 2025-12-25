# Shipping Broker Website Requirements Document\n
## 1. Website Name
Shipping Broker Platform

## 2. Website Description
A professional multi-page website for a shipping broker company operating in the United States and North America. The platform connects shippers with carriers, facilitating efficient freight brokerage and logistics solutions across the region.
\n## 3. Website Features\n\n### 3.1 Core Pages
- **Home Page**: Hero section with compelling value proposition and CTA, Why Choose Us section with animated feature cards, interactive How We Work timeline, services preview with hover effects, comprehensive footer with quick links
- **About Us Page**: Engaging company story with visual timeline, mission and vision statements with icons, team member profiles with professional photos and LinkedIn integration, core values presentation with interactive cards
- **Services Page**: Detailed service offerings including Freight Brokerage, Carrier Matching, Logistics Consulting, Tracking & Insurance with expandable descriptions and relevant icons
- **Contact Page**: User-friendly inquiry form with real-time validation and Formspree integration, contact details sidebar with clickable phone/email, interactive embedded Google Maps with custom marker\n- **Get a Quote Page**: Streamlined multi-step quote request form with progress indicator, shipment details collection with auto-suggestions, instant quote estimation preview

### 3.2 Key Functionalities
- **Navigation System**: Sticky header with smooth scroll, active page highlighting, mobile hamburger menu with slide-in animation, prominent CTA button with pulse effect
- **Form Handling**: Smart contact and quote forms with real-time validation, instant email notifications to owner with formatted details, secure database storage with encryption
- **Owner Dashboard**: Protected admin panel with secure authentication, comprehensive submission management with bulk actions, real-time analytics with auto-refresh, customization settings with live preview
- **Data Management**: Advanced submission tracking with status workflow, multi-criteria search and filter with saved presets, smart pagination with adjustable items per page, export functionality (CSV/PDF)
- **Analytics**: Interactive stats cards showing total submissions with trend indicators, pending vs completed ratio with visual progress bars, average response time tracking, top request types with dynamic charts and drill-down capability

### 3.3 Technical Features
- Fully responsive design with optimized breakpoints for all devices
- Server-side rendering with Next.js for superior SEO performance
- Advanced form validation using React Hook Form with custom error messages
- Robust database integration (Vercel Postgres or Supabase) with connection pooling
- Secure authentication system with NextAuth.js, password hashing, and session management (default credentials: admin/password)
- Reliable email integration via Formspree API with retry mechanism
- Smooth dark/light mode theme switcher with system preference detection
- Dynamic logo upload and brand color customization in dashboard settings
- Performance optimization with lazy loading and code splitting
- Accessibility compliance (WCAG 2.1 AA standards)\n
## 4. Design Style

- **Color Scheme**: Primary navy blue (#1E3A8A) with gradient variations for depth, vibrant accent orange (#F59E0B) for CTAs with hover state (#EA580C), clean light gray background (#F9FAFB), rich dark gray text (#111827), balanced medium gray (#6B7280) for secondary content
- **Typography**: Modern sans-serif (Inter 400-700 weights) for excellent readability, elegant serif (Playfair Display 600-700) for impactful headings, optimized line-height (1.6) and letter-spacing\n- **Layout**: Card-based modular design with consistent16px/24px spacing, clear visual hierarchy with size contrast, horizontal timeline with animated progress indicators, intuitive sidebar layout for dashboard with collapsible sections
- **Interactive Effects**: Smooth Framer Motion animations including button hover (scale 1.05 + shadow lift), card hover (translateY -4px + enhanced shadow), page transitions (fade + slide), loading states with skeleton screens; AOS scroll animations with staggered delays (fade-in-up, slide-in-left/right, zoom-in with0.3s duration)
- **Icons**: Consistent Lucide icon library (24px standard size) for navigation, features, social media (Facebook, LinkedIn, Twitter), service categories with custom colors\n- **Visual Elements**: Rounded corners (8px cards, 6px buttons), layered shadows for depth perception (sm/md/lg variants), responsive breakpoints (640px mobile, 768px tablet, 1024px desktop, 1280px large desktop), gradient overlays on hero images
- **Dashboard UI**: Professional admin interface with collapsible sidebar navigation, data visualization using Recharts (animated pie charts for status distribution, grouped bar charts for monthly request types, line charts for trends), sortable table layout with row actions, advanced search with filters dropdown, smooth pagination with page jump\n- **Micro-interactions**: Button ripple effects, form field focus animations, toast notifications for user actions, loading spinners with brand colors, success/error state animations

## 5. Reference Information

- **Reference Site**: https://app.landingsite.ai/website-preview?id=7697405d-425d-4069-a43a-8c676d0926ab
- **Technology Stack**: Next.js 14+ with App Router and Server Components, Tailwind CSS with custom configuration, Framer Motion for animations, AOS for scroll effects, Lucide Icons, React Hook Form with Zod validation, NextAuth.js with credential provider, Formspree API integration, Vercel Postgres/Supabase with Prisma ORM, Recharts for data visualization, TanStack Query for data fetching, next-themes for theme management
- **Form Submission**: Formspree endpoint integration with custom success/error handling, formatted email notifications to owner@email.com including all form details, timestamp, user IP, and submission source
- **Database Schema**: Optimized tables with fields including id (UUID), name (varchar100), email (varchar 255), phone (varchar 20), message/type (text), origin/destination (varchar 255), timestamp (datetime with timezone), status (enum: pending/in-progress/completed/cancelled), priority (enum: low/medium/high), assigned_to (varchar 100), notes (text)\n\n## 6. Reference Files\n1. Research Report: ./workspace/app-8hevmec8wcn5/docs/report.md
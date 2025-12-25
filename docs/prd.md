# Shipping Broker Website Requirements Document\n
## 1. Website Name
Shipping Broker Platform

## 2. Website Description
A professional multi-page website for a shipping broker company operating in the United States and North America. The platform connects shippers with carriers, facilitating efficient freight brokerage and logistics solutions across the region with integrated payment processing.

## 3. Website Features

### 3.1 Core Pages
- **Home Page**: Hero section with compelling value proposition and CTA, Why Choose Us section with animated feature cards, interactive How We Work timeline, services preview with hover effects, comprehensive footer with quick links
- **About Us Page**: Engaging company story with visual timeline, mission and vision statements with icons, team member profiles with professional photos and LinkedIn integration, core values presentation with interactive cards
- **Services Page**: Detailed service offerings including Freight Brokerage, Carrier Matching, Logistics Consulting, Tracking & Insurance with expandable descriptions and relevant icons
- **Contact Page**: User-friendly inquiry form with real-time validation and Formspree integration, contact details sidebar with clickable phone/email, interactive embedded Google Maps with custom marker
- **Get a Quote Page**: Streamlined multi-step quote request form with progress indicator, shipment details collection with auto-suggestions, instant quote estimation preview with integrated payment option

### 3.2 Key Functionalities
- **Navigation System**: Sticky header with smooth scroll, active page highlighting, mobile hamburger menu with slide-in animation, prominent CTA button with pulse effect
- **Form Handling**: Smart contact and quote forms with real-time validation, instant email notifications to owner with formatted details, secure database storage with encryption
- **Payment System**: Secure payment gateway integration (Stripe/PayPal) with direct bank transfer capability, multiple payment methods support (credit/debit cards, ACH transfers), automatic payment confirmation emails, transaction history tracking, refund management system, PCI DSS compliant payment processing, direct deposit to owner's bank account with automated reconciliation
- **Owner Dashboard**: Protected admin panel with secure authentication, comprehensive submission management with bulk actions, real-time analytics with auto-refresh, customization settings with live preview, payment transaction monitoring with detailed reports, bank account configuration panel\n- **Data Management**: Advanced submission tracking with status workflow, multi-criteria search and filter with saved presets, smart pagination with adjustable items per page, export functionality (CSV/PDF)\n- **Analytics**: Interactive stats cards showing total submissions with trend indicators, pending vs completed ratio with visual progress bars, average response time tracking, top request types with dynamic charts and drill-down capability, revenue tracking and payment analytics

### 3.3 Technical Features
- Fully responsive design with optimized breakpoints for all devices
- Server-side rendering with Next.js for superior SEO performance
- Advanced form validation using React Hook Form with custom error messages
- Robust database integration (Vercel Postgres or Supabase) with connection pooling
- Secure authentication system with NextAuth.js, password hashing, and session management (default credentials: admin/password)
- Reliable email integration via Formspree API with retry mechanism
- Stripe API integration for payment processing with webhook support\n- Secure bank account connection using Plaid or Stripe Connect for direct deposits
- Smooth dark/light mode theme switcher with system preference detection
- Dynamic logo upload and brand color customization in dashboard settings
- Performance optimization with lazy loading and code splitting
- Accessibility compliance (WCAG 2.1 AA standards)
- SSL/TLS encryption for all payment transactions

## 4. Design Style

- **Color Scheme**: Primary navy blue (#1E3A8A) with gradient variations for depth, vibrant accent orange (#F59E0B) for CTAs with hover state (#EA580C), clean light gray background (#F9FAFB), rich dark gray text (#111827), balanced medium gray (#6B7280) for secondary content, success green (#10B981) for payment confirmations\n- **Typography**: Modern sans-serif (Inter 400-700 weights) for excellent readability, elegant serif (Playfair Display 600-700) for impactful headings, optimized line-height (1.6) and letter-spacing
- **Layout**: Card-based modular design with consistent 16px/24px spacing, clear visual hierarchy with size contrast, horizontal timeline with animated progress indicators, intuitive sidebar layout for dashboard with collapsible sections, secure payment form layout with trust badges
- **Interactive Effects**: Smooth Framer Motion animations including button hover (scale 1.05 + shadow lift), card hover (translateY -4px + enhanced shadow), page transitions (fade + slide), loading states with skeleton screens, payment processing animations with progress indicators; AOS scroll animations with staggered delays (fade-in-up, slide-in-left/right, zoom-in with 0.3s duration)
- **Icons**: Consistent Lucide icon library (24px standard size) for navigation, features, social media (Facebook, LinkedIn, Twitter), service categories with custom colors, payment method icons (credit cards, bank transfer)\n- **Visual Elements**: Rounded corners (8px cards, 6px buttons), layered shadows for depth perception (sm/md/lg variants), responsive breakpoints (640px mobile, 768px tablet, 1024px desktop, 1280px large desktop), gradient overlays on hero images, secure payment badges and SSL indicators
- **Dashboard UI**: Professional admin interface with collapsible sidebar navigation, data visualization using Recharts (animated pie charts for status distribution and payment analytics, grouped bar charts for monthly request types and revenue, line charts for trends), sortable table layout with row actions, advanced search with filters dropdown, smooth pagination with page jump, payment transaction table with status indicators\n- **Micro-interactions**: Button ripple effects, form field focus animations, toast notifications for user actions and payment confirmations, loading spinners with brand colors, success/error state animations, secure payment processing indicators

## 5. Payment Integration Details

- **Payment Gateway**: Stripe integration with direct bank account payout capability\n- **Supported Payment Methods**: Credit cards (Visa, Mastercard, Amex), debit cards, ACH bank transfers, digital wallets (Apple Pay, Google Pay)\n- **Bank Account Setup**: Owner can configure bank account details in dashboard settings for automatic fund transfers
- **Transaction Flow**: Customer submits quote request → receives quote with payment link → completes payment → funds automatically transferred to owner's bank account within 2-3 business days → both parties receive confirmation emails
- **Security Features**: PCI DSS Level 1 compliance, end-to-end encryption, fraud detection,3D Secure authentication for cards
- **Payment Dashboard**: Real-time transaction monitoring, payment history with search and filters, automated payout schedule, refund management, downloadable financial reports

## 6. Reference Information

- **Reference Site**: https://app.landingsite.ai/website-preview?id=7697405d-425d-4069-a43a-8c676d0926ab
- **Technology Stack**: Next.js 14+ with App Router and Server Components, Tailwind CSS with custom configuration, Framer Motion for animations, AOS for scroll effects, Lucide Icons, React Hook Form with Zod validation, NextAuth.js with credential provider, Formspree API integration, Stripe API with Stripe Connect for payments, Vercel Postgres/Supabase with Prisma ORM, Recharts for data visualization, TanStack Query for data fetching, next-themes for theme management
- **Form Submission**: Formspree endpoint integration with custom success/error handling, formatted email notifications to owner@email.com including all form details, timestamp, user IP, and submission source
- **Payment Processing**: Stripe webhook integration for real-time payment status updates, automated email notifications for successful payments, failed payment retry mechanism, secure token-based payment authentication\n- **Database Schema**: Optimized tables with fields including id (UUID), name (varchar 100), email (varchar 255), phone (varchar 20), message/type (text), origin/destination (varchar 255), timestamp (datetime with timezone), status (enum: pending/in-progress/completed/cancelled), priority (enum: low/medium/high), assigned_to (varchar 100), notes (text), payment_status (enum: unpaid/pending/paid/refunded), payment_amount (decimal 10,2), payment_id (varchar 255), transaction_date (datetime)\n\n## 7. Reference Files\n1. Research Report: ./workspace/app-8hevmec8wcn5/docs/report.md
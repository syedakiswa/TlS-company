# Shipping Broker Website Requirements Document

## 1. Website Name
Shipping Broker Platform

## 2. Website Description
A professional multi-page website for a shipping broker company operating in the United States and North America. The platform connects shippers with carriers, facilitating efficient freight brokerage and logistics solutions across the region.

## 3. Website Features
\n### 3.1 Core Pages
- **Home Page**: Hero section with company value proposition, Why Choose Us section with feature cards, How We Work timeline, services teaser, and footer
- **About Us Page**: Company story, mission and vision statements, team member profiles, core values presentation
- **Services Page**: Detailed service offerings including Freight Brokerage, Carrier Matching, Logistics Consulting, Tracking & Insurance
- **Contact Page**: Inquiry form with Formspree integration, contact details sidebar, embedded Google Maps
- **Get a Quote Page**: Comprehensive quote request form with shipment details collection

### 3.2 Key Functionalities
- **Navigation System**: Sticky header with page links and prominent CTA button
- **Form Handling**: Contact and quote forms with validation, email notifications to owner, database storage
- **Owner Dashboard**: Protected admin panel with authentication, submission management, analytics, and customization settings
- **Data Management**: Submission tracking with status updates, search and filter capabilities, pagination for large datasets
- **Analytics**: Quick stats cards showing total submissions, pending vs completed ratio, average response time, top request types with charts
\n### 3.3 Technical Features
- Responsive design optimized for mobile, tablet, and desktop
- Server-side rendering for SEO optimization
- Form validation using React Hook Form
- Database integration (Vercel Postgres or Supabase) for data persistence
- Authentication system with NextAuth.js (default credentials: admin/password)
- Email integration via Formspree API
- Dark/light mode theme switcher
- Logo and color customization in dashboard settings

## 4. Design Style

- **Color Scheme**: Primary navy blue (#1E3A8A) for headers and buttons, accent orange (#F59E0B) for CTAs and highlights, light gray background (#F9FAFB), dark gray text (#111827), medium gray (#6B7280) for secondary text
- **Typography**: Sans-serif fonts (Inter or Roboto, 400-600 weights) for body text, bold serif (Playfair Display) for headings\n- **Layout**: Card-based modular design with clear visual hierarchy, horizontal timeline for process steps, sidebar layout for dashboard\n- **Interactive Effects**: Framer Motion animations for button hover (scale effect), card lifts with shadow on hover, smooth page transitions; AOS scroll animations for section entrances (fade-in, slide-in, zoom-in effects)
- **Icons**: Lucide icon library for all interface icons including navigation, features, social media (Facebook), and service categories
- **Visual Elements**: Rounded buttons and cards, subtle shadows for depth, responsive breakpoints at 640px, 768px, 1024px
- **Dashboard UI**: Clean admin interface with sidebar navigation, data visualization using Recharts (pie charts for status distribution, bar charts for request types), table layout for submissions with search and pagination

## 5. Reference Information

- **Reference Site**: https://app.landingsite.ai/website-preview?id=7697405d-425d-4069-a43a-8c676d0926ab
- **Technology Stack**: Next.js 14+ with App Router, Tailwind CSS, Framer Motion, AOS, Lucide Icons, React Hook Form, NextAuth.js, Formspree, Vercel Postgres/Supabase, Recharts, TanStack Query, next-themes
- **Form Submission**: Formspree endpoint integration, email notifications to owner@email.com with all form details and timestamp
- **Database Schema**: Fields include id, name, email, phone, message/type, origin/destination, timestamp, status (pending/completed)
\n## 6. Reference Files
1. Research Report: ./workspace/app-8hevmec8wcn5/docs/report.md
# Personal Trainer Junior Nobrega Website

## Overview

This is a modern, responsive personal trainer website for Junior Nobrega, built with a React frontend and Express backend stack. The site features a clean, professional design focused on converting visitors into clients through strategic call-to-actions and testimonials.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: express-session with PostgreSQL store
- **Development**: Hot module replacement via Vite integration

### Design System
- **Primary Color**: #e10600 (vibrant red)
- **Typography**: Inter font family
- **Components**: Consistent shadcn/ui component library
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Landing Page Sections
1. **Header**: Fixed navigation with mobile menu and WhatsApp CTA
2. **Hero**: Animated counter showing 100+ students with main CTA
3. **About**: Personal trainer biography with feature highlights
4. **Benefits**: Three-column grid showcasing training benefits
5. **Testimonials**: Carousel with client success stories
6. **Gallery**: Image showcase of training sessions
7. **Call-to-Action**: Direct WhatsApp contact integration
8. **Footer**: Social media links and contact information

### Interactive Features
- Smooth scroll navigation between sections
- Intersection Observer for fade-in animations
- Mobile-responsive hamburger menu
- Testimonial carousel with navigation controls
- WhatsApp integration for lead generation

### UI Components
- Responsive card layouts
- Button variants (primary, secondary, ghost)
- Sheet component for mobile navigation
- Toast notifications system
- Progress indicators and animations

## Data Flow

### Frontend Data Management
- React Query for API state management
- Local state for UI interactions (menu toggles, carousel position)
- Intersection Observer API for scroll-based animations
- Form handling with controlled components

### Backend API Structure
- RESTful API endpoints under `/api` prefix
- Express middleware for request logging and error handling
- Session-based authentication ready (currently using memory storage)
- CRUD operations through storage interface

### Database Schema
- User management schema with Drizzle ORM
- PostgreSQL as primary database
- Migration system with drizzle-kit
- Type-safe database operations

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Tailwind CSS, Radix UI, shadcn/ui
- **Backend**: Express, Drizzle ORM, Neon Database
- **Development**: Vite, TypeScript, ESBuild

### Third-party Integrations
- **WhatsApp Business API**: Direct messaging integration
- **Font Loading**: Google Fonts (Inter)
- **Icons**: Lucide React, React Icons
- **Animations**: CountUp.js for number animations

### Development Tools
- **Hot Reload**: Vite dev server with HMR
- **Type Checking**: TypeScript with strict mode
- **Linting**: ESLint configuration
- **Build**: Vite for frontend, ESBuild for backend

## Deployment Strategy

### Production Build
- Frontend: Vite build to `dist/public`
- Backend: ESBuild bundle to `dist/index.js`
- Static assets served from build directory

### Hosting Configuration
- **Platform**: Replit with autoscale deployment
- **Port**: 5000 (mapped to port 80 externally)
- **Environment**: Node.js 20 runtime
- **Database**: Neon PostgreSQL serverless

### Development Workflow
- Local development with `npm run dev`
- Database migrations with `npm run db:push`
- Type checking with `npm run check`
- Production build with `npm run build`

## Changelog

Changelog:
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
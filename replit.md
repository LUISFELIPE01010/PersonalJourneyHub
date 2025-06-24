# Replit Development Guide

## Overview

This is a personal trainer landing page application built with React, TypeScript, and Express.js. The application showcases Junior Nobrega's personal training services with sections for testimonials, benefits, quiz functionality, and contact information. It uses a modern tech stack with Tailwind CSS for styling and shadcn/ui components for a professional look.

## System Architecture

The application follows a full-stack monorepo structure with:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for client-side routing
- **State Management**: React Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: CSS transitions and intersection observer for scroll animations

### Backend Architecture
- **Express Server**: RESTful API structure (routes not yet implemented)
- **Database Layer**: Drizzle ORM with PostgreSQL schema
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Development Setup**: Hot reloading with Vite integration

### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Interactive Elements**: Quiz component, testimonial carousel, image galleries
- **Performance**: Lazy loading, smooth scrolling, optimized images
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Data Flow

1. **Client Request**: React components make API calls through React Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Currently using in-memory storage, configured for PostgreSQL
4. **Response**: JSON responses sent back to client components
5. **UI Updates**: React Query manages caching and component re-renders

## External Dependencies

### Production Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **react-countup**: Animated number counting
- **react-icons**: Icon library with multiple icon sets
- **embla-carousel-react**: Carousel/slider functionality

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing

### Third-party Services
- **WhatsApp Integration**: Direct links for customer communication
- **Image Hosting**: Unsplash and local assets for testimonials/gallery
- **Font Loading**: Google Fonts (Inter family)

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit's development environment
- **Hot Reloading**: Vite dev server with HMR enabled
- **Port Configuration**: Server runs on port 5000, mapped to external port 80

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Static Serving**: Express serves built frontend in production

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL
- **Build Process**: Separate build commands for frontend and backend
- **Deployment Target**: Configured for autoscale deployment on Replit

## Changelog

Changelog:
- June 23, 2025. Initial setup
- June 24, 2025. Major optimizations: Mobile-first design, Instagram videos cleanup, touch navigation, performance improvements

## User Preferences

Preferred communication style: Simple, everyday language.
Mobile-first design: Photo first in hero section, optimized touch targets, smaller navigation buttons.
Instagram integration: Clean video embeds without descriptions, touch-enabled carousel.
Performance priorities: Lightweight, fast-loading, excellent responsiveness across all devices.
# Hekla E-Commerce Store

## Overview

Hekla is a modern e-commerce web application for an athletic footwear and apparel brand. Built as a single-page application (SPA), it showcases products across multiple categories (Men, Women, Kids) and sports (Running, Soccer, Basketball, etc.). The application features product browsing, filtering, detailed product pages, and various informational pages about shipping, returns, sizing, and company information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **React Router DOM** for client-side routing and navigation between pages

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable UI elements
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theming support (light/dark mode capability via next-themes)
- Component library includes 30+ pre-built components (Button, Card, Dialog, Accordion, etc.)

**State Management**
- **TanStack Query v5** for server state management and data fetching
- **React Hook Form** with Zod resolvers for form validation
- Local component state using React hooks (useState, useEffect)

**Design System**
- Custom color palette defined in CSS variables (HSL format)
- Typography using Inter font family from Google Fonts
- Custom sport-specific colors (blue, green, orange)
- Responsive breakpoint system via Tailwind

### Application Structure

**Page-Based Architecture**
The application follows a page-based routing structure:
- **Home** - Hero section with new arrivals
- **Products** - Main catalog with filtering and sorting
- **ProductDetail** - Individual product pages with size/color selection
- **Category Pages** - Gender-specific product views (Men, Women, Kids)
- **Sports Pages** - Sport-specific product filtering
- **Sale Page** - Discounted products
- **Informational Pages** - About, Contact, FAQ, Shipping, Size Guide, Careers, Stores
- **404 Page** - Not found error handling

**Component Structure**
- **Header** - Sticky navigation with search, cart, and wishlist
- **Footer** - Multi-column footer with links and social media
- **ProductCard** - Reusable product display with wishlist functionality
- **UI Components** - Centralized component library in `/src/components/ui/`

**Data Management**
- Static product data stored in `/src/data/products.ts`
- Product interface defines: id, name, category, price, image, gender, sport, colors, sizes, description
- Client-side filtering and sorting logic implemented in product listing pages

### Routing Strategy

**Client-Side Routing**
- All routes handled by React Router without server-side rendering
- Path-based navigation matching standard e-commerce URL patterns
- Catch-all route for 404 error handling

### Form Handling & Validation

**Form Architecture**
- React Hook Form for form state management
- Zod for schema-based validation
- Integration with shadcn/ui form components

### Styling Approach

**Tailwind Configuration**
- Custom container settings with centered layout
- Extended color system using HSL values
- Custom shadow definitions
- Border radius customization (set to 0 for sharp corners)
- Dark mode support via class-based strategy

**CSS Organization**
- Global styles in `/src/index.css`
- Tailwind directives (@tailwind base, components, utilities)
- CSS custom properties for design tokens
- Component-scoped styles using Tailwind classes

### Build Configuration

**TypeScript Setup**
- Strict mode disabled for flexibility
- Path aliases configured (@/* maps to ./src/*)
- Separate configs for app and node environments
- ESNext module resolution with bundler mode

**Vite Configuration**
- SWC plugin for fast React refresh
- Development-only lovable-tagger plugin for component identification
- Base path set to root
- Server configured for host 0.0.0.0 on port 5000

### Performance Optimizations

- Image optimization using Unsplash CDN
- Lazy loading support via React Router
- Component-level code splitting capability
- Embla Carousel for efficient image galleries

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives** (v1.x - v2.x)
- Comprehensive collection of accessible, unstyled components
- Includes: Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Navigation Menu, Popover, Radio Group, Select, Slider, Switch, Tabs, Toast, Tooltip
- Provides keyboard navigation and ARIA compliance

**Embla Carousel** (v8.6.0)
- Touch-friendly carousel/slider component
- Used for product image galleries

**Lucide React** (v0.462.0)
- Icon library providing 1000+ SVG icons
- Used throughout UI for visual indicators

### Styling & Utilities

**Tailwind CSS** (latest)
- Utility-first CSS framework
- PostCSS and Autoprefixer for processing

**Class Variance Authority** (v0.7.1)
- Utility for creating variant-based component APIs
- Used in button and badge components

**clsx** & **tailwind-merge**
- Class name utilities for conditional styling
- Conflict resolution for Tailwind classes

### Form & Validation

**React Hook Form** (latest)
- Performant form state management
- Minimal re-renders

**@hookform/resolvers** (v3.10.0)
- Schema validation integration
- Zod resolver support (implied dependency)

**input-otp** (v1.4.2)
- One-time password input component

### Date & Time

**date-fns** (v3.6.0)
- Modern date utility library
- Used with react-day-picker for calendar functionality

**react-day-picker** (v8.10.1)
- Flexible date picker component

### Command Palette

**cmdk** (v1.1.1)
- Command menu component
- Fast, composable command palette

### Theming

**next-themes** (v0.3.0)
- Theme switching support (light/dark mode)
- Persist theme preference

### Testing & Development

**ESLint** with TypeScript support
- React hooks plugin for best practices
- React refresh plugin for fast development
- Relaxed rules for rapid prototyping (unused vars disabled)

**Vite Plugin Ecosystem**
- @vitejs/plugin-react-swc for fast refresh
- lovable-tagger for development component tracking

### Advertising & Analytics

**Google AdSense** (Publisher ID: ca-pub-6003933172148241)
- Integrated via script tags in index.html
- Ads.txt file configured for direct advertising

### SEO & Social

**Open Graph** meta tags configured
- Twitter card support
- Custom OpenGraph image
- Comprehensive meta descriptions

**Robots.txt** configured
- Allows all major search engine bots (Googlebot, Bingbot, Twitterbot, Facebook)

### Font Loading

**Google Fonts**
- Inter font family (weights: 400-900)
- Preconnected for performance

### No Backend/Database

The application is currently frontend-only with no backend API or database integration. All product data is static and stored in TypeScript files. Future backend integration could involve:
- RESTful API or GraphQL for product data
- User authentication system
- Shopping cart persistence
- Order management system
- Potential database solution (PostgreSQL with Drizzle ORM could be added)
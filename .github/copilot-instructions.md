# Portfolio Website - AI Coding Instructions

## Project Overview
This is Vishnu U K's professional portfolio website showcasing expertise as a Business Analyst and Data Professional. Built with Next.js 14, TypeScript, and modern web technologies, focusing on performance, accessibility, and responsive design.

## Architecture & Structure
- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Build System**: Next.js built-in bundling and optimization
- **Deployment**: Static export for GitHub Pages/Netlify/Vercel

## Development Workflow
### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

### Key Commands
- `npm run dev` - Start local development server with hot reload at http://localhost:3000
- `npm run build` - Create production build with Next.js optimization
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint checks
- `npm run export` - Generate static export in `dist/` folder for deployment

## Code Conventions
### File Organization
- `/src/app/` - Next.js 14 App Router pages and layouts
- `/src/components/` - Reusable UI components (all sections as separate components)
- `/public/` - Static assets (favicon, robots.txt, images)
- `tailwind.config.js` - Tailwind configuration with custom animations
- `next.config.js` - Next.js configuration for static export

### Component Architecture
- Each page section is a separate component (hero-section.tsx, about-section.tsx, etc.)
- All components use "use client" directive for interactivity
- Framer Motion for animations with `useInView` hooks for scroll-triggered animations
- React Hook Form + Zod for form validation in contact section

### Styling System
- Tailwind CSS with custom gradient classes and animations
- Dark/light mode using next-themes
- Custom animations defined in tailwind.config.js (float, slide-up, fade-in)
- Responsive design with mobile-first approach
- Color system: blue/purple gradients for primary branding

## Component Structure
### Main Sections (all in /src/components/)
- `navbar.tsx` - Responsive navigation with theme toggle and smooth scrolling
- `hero-section.tsx` - Landing with animated text, stats, and floating elements
- `about-section.tsx` - Personal info with animated cards and floating stats
- `experience-section.tsx` - Interactive timeline with work history and achievements
- `skills-section.tsx` - Tabbed skills with animated progress bars (Technical/Analytical/Soft)
- `projects-section.tsx` - Case study selector with detailed project breakdowns
- `achievements-section.tsx` - Certifications and awards with timeline visualization
- `contact-section.tsx` - Form with validation plus contact info and social links

### Animation Patterns
- Use `useInView` from framer-motion for scroll-triggered animations
- `containerVariants` and `itemVariants` pattern for staggered animations
- Custom Tailwind animations: `animate-float` for background elements
- Hover effects with `whileHover` and `whileTap` for interactive elements

## Business Context
### Target Profile: Vishnu U K - Business Analyst
- **Specialties**: Power BI dashboards, SQL analytics, healthcare data, process optimization
- **Key Projects**: Freight Cost Optimization Dashboard, Expedium Reports Module
- **Experience**: ZeOmega (current), Wolken Software, iTech Workshop
- **Certifications**: Power BI Certified, SQL Server Specialist, IIBA Foundation

### Content Guidelines
- Maintain professional tone focused on data analytics and business intelligence
- Highlight measurable business impact (cost savings, efficiency improvements)
- Showcase technical skills: Power BI, SQL, Python, Azure, DAX
- Include specific metrics and achievements from real projects
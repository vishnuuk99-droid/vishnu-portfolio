# Vishnu U K - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, showcasing Vishnu's expertise as a Business Analyst and Data Professional.

## 🚀 Features

- **Modern Design**: Sleek, minimalistic interface inspired by professional portfolio standards
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Sections**:
  - Hero section with animated elements
  - About me with personal information and interests
  - Experience timeline with detailed work history
  - Skills showcase with interactive progress bars
  - Project case studies with detailed insights
  - Achievements and certifications timeline
  - Contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Theme**: Next Themes

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── theme-provider.tsx   # Theme context provider
│   ├── hero-section.tsx     # Landing section
│   ├── about-section.tsx    # About me section
│   ├── experience-section.tsx # Work experience timeline
│   ├── skills-section.tsx   # Skills and competencies
│   ├── projects-section.tsx # Project showcases
│   ├── achievements-section.tsx # Awards and certifications
│   └── contact-section.tsx  # Contact form and info
public/
├── favicon.svg              # Site favicon
└── robots.txt              # SEO robots file
```

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/hero-section.tsx`)
   - Name and title
   - Professional tagline
   - Statistics

2. **About Section** (`src/components/about-section.tsx`)
   - Professional background
   - Personal interests
   - Contact information

3. **Experience Section** (`src/components/experience-section.tsx`)
   - Work history
   - Job descriptions
   - Achievements

4. **Skills Section** (`src/components/skills-section.tsx`)
   - Technical skills and proficiency levels
   - Tools and technologies

5. **Projects Section** (`src/components/projects-section.tsx`)
   - Project case studies
   - Technologies used
   - Results and impact

6. **Contact Section** (`src/components/contact-section.tsx`)
   - Contact information
   - Social media links

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify font imports in `src/app/globals.css`
- **Animations**: Customize animations in component files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 SEO Optimization

- Meta tags configured in `layout.tsx`
- Open Graph tags for social media sharing
- Robots.txt for search engine crawling
- Semantic HTML structure

## 🚀 Deployment

### Static Export (GitHub Pages, Netlify, Vercel)

1. **Build and export**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Configure build settings**:
   - Build Command: `npm run build && npm run export`
   - Publish Directory: `dist`

## 📊 Performance

- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Fast loading times

## 🔒 Security

- No sensitive data exposed in client-side code
- Form validation and sanitization
- HTTPS recommended for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

For questions or support, please contact:
- Email: vishnu.uk@example.com
- LinkedIn: [linkedin.com/in/vishnu-uk](https://linkedin.com/in/vishnu-uk)

## 🎯 Business Focus

This portfolio website is specifically designed for Vishnu U K, a Business Analyst specializing in:

- **Data Analytics**: Advanced Power BI dashboard development
- **Business Intelligence**: SQL-based reporting and insights
- **Process Optimization**: Workflow improvement and automation
- **Stakeholder Management**: Requirements gathering and documentation
- **Healthcare Analytics**: Specialized experience in healthcare data

The website showcases real projects including freight cost optimization dashboards, healthcare reporting modules, and business process automation solutions.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
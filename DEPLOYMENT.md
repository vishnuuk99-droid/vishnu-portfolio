# Deployment Guide

## GitHub Pages Deployment

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" as source branch

2. **Deploy**:
   ```bash
   npm run build
   git add .
   git commit -m "Initial deployment"
   git push origin main
   
   # Create and push to gh-pages branch
   git checkout --orphan gh-pages
   git rm -rf .
   npm run build && npm run export
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   git checkout main
   ```

## Netlify Deployment

1. **Connect Repository**:
   - Login to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `dist`
   - Node version: 18

## Vercel Deployment

1. **Connect Repository**:
   - Login to Vercel
   - Import your GitHub repository

2. **Build Settings** (auto-detected):
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `dist`

## Manual Deployment

```bash
# Build for production
npm run build
npm run export

# The dist/ folder contains your static site
# Upload the contents to any static hosting provider
```

## Environment Variables

For contact form functionality, set these environment variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=your-email@example.com
```

## Custom Domain

1. **Add CNAME file** in public folder:
   ```
   your-domain.com
   ```

2. **Configure DNS**:
   - Add CNAME record pointing to your hosting provider
   - For GitHub Pages: `username.github.io`
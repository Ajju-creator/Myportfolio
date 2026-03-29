# 🚀 Quick Start Guide - Portfolio Setup & Deployment

## Installation & Running Locally

### Step 1: Install Dependencies
```bash
cd portfolio-react
npm install
```

This installs:
- React 18.2.0
- Framer Motion 10.16.4
- Tailwind CSS 3.3.0
- Vite 4.3.9
- And all required dev dependencies

### Step 2: Start Development Server
```bash
npm run dev
```

Output:
```
  VITE v4.3.9  ready in 234 ms
  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

Open http://localhost:3000 in your browser!

### Step 3: Make Changes

Edit files in `src/` and changes hot-reload automatically.

---

## 📦 Build for Production

```bash
npm run build
```

This creates:
- `dist/` folder with optimized production files
- ~150KB gzipped bundle
- Minified CSS and JavaScript
- Optimized images

---

## 🌐 Deployment Guide

### Option 1: Vercel (Easiest - Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow prompts:
1. Link to GitHub repo (optional)
2. Select project settings
3. Deploy!

Your site goes live instantly. Future pushes auto-deploy.

**Live URL:** `https://your-project.vercel.app`

### Option 2: Netlify

**Method A: Via Netlify Dashboard**
1. Build locally: `npm run build`
2. Go to https://netlify.com
3. Sign in with GitHub
4. Click "New site from Git"
5. Connect your repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Deploy!

**Method B: Via CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

```bash
# In vite.config.js, add base:
export default {
  base: '/portfolio-react/',  // if deploying to subdirectory
  // ... rest of config
}

# Build
npm run build

# The dist/ folder is ready to deploy
```

Then:
1. Push `dist` folder to `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Select `gh-pages` branch as source

**Live URL:** `https://username.github.io/portfolio-react`

### Option 4: AWS S3 + CloudFront

```bash
# Build
npm run build

# Create S3 bucket and upload dist/
aws s3 sync dist/ s3://your-bucket-name --delete

# Set up CloudFront distribution
# Configure custom domain (optional)
```

### Option 5: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ⚙️ Environment Configuration

### Update in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      neon: {
        blue: "#00d4ff",      // Primary color
        purple: "#b000ff",    // Secondary color
        pink: "#ff006e"       // Accent color
      }
    }
  }
}
```

### Update in `src/sections/Hero.jsx`:
```javascript
// Update social links
const socialLinks = [
  { icon: Github, url: 'https://YOUR_GITHUB_URL', ... },
  // ... other links
]
```

### Update `src/index.css`:
```css
/* Customize animations, fonts, scrollbar colors */
```

---

## 📊 Performance Optimization

Already included:
- ✅ Code splitting with Vite
- ✅ CSS optimization with Tailwind
- ✅ Image lazy loading ready
- ✅ Minification & tree-shaking
- ✅ Gzip compression

To further optimize:

### Add Image Optimization
```bash
npm install @vitejs/plugin-react
```

### Implement Service Worker
```bash
npm install vite-plugin-pwa
```

---

## 🔍 Debugging

### View build analysis:
```bash
npm install -g vite-plugin-visualizer
```

### Check bundle size:
```bash
npm run build -- --sourcemap
```

---

## 🐛 Common Issues

### Issue: Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Issue: CSS not applying
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Build fails
```bash
# Check for syntax errors
npm run build -- --debug

# Check React version
npm list react
```

---

## 📝 Checklist Before Deployment

- [ ] Update all personal information
- [ ] Check all social links are correct
- [ ] Add resume PDF to `public/` folder
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags in `index.html`
- [ ] Test all animations
- [ ] Check color scheme
- [ ] Verify deployment folder structure

---

## 📱 Testing

### Local testing:
```bash
npm run dev
# Visit http://localhost:3000
```

### Production preview:
```bash
npm run build
npm run preview
# Visit http://localhost:4173
```

### Mobile testing:
1. Build locally
2. Get your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Visit `http://YOUR_IP:3000` from mobile

---

## 🚀 Continuous Integration/Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **Vercel Docs:** https://vercel.com/docs

---

## 🎉 You're All Set!

Your portfolio is ready to showcase to the world! 

**Next Steps:**
1. Customize content
2. Add your resume
3. Deploy to your chosen platform
4. Share with recruiters & contacts

Good luck! 🚀

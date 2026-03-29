# Environment Setup & Requirements

## System Requirements

- **Node.js:** v16.0.0 or higher
- **npm:** v7.0.0 or higher (comes with Node.js)
- **RAM:** 2GB minimum
- **Disk Space:** 500MB available
- **Internet:** Required for npm package installation

## Pre-Installation Checklist

### Check Node.js Installation
```bash
node --version
npm --version
```

Should output versions like:
```
v18.16.0
9.6.7
```

### Install Node.js (if not installed)

**Windows:**
1. Download from https://nodejs.org/
2. Choose LTS version
3. Run installer, follow prompts
4. Restart terminal/IDE

**Mac:**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

---

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd c:\Users\Ajay\Downloads\portfolio-react
```

### 2. Install Dependencies
```bash
npm install
```

**What gets installed:**
- `react` (18.2.0) - UI Framework
- `react-dom` (18.2.0) - React DOM
- `framer-motion` (10.16.4) - Animations
- `lucide-react` - Icon library
- Development tools (Vite, Tailwind CSS, PostCSS, etc.)

**Installation time:** 2-5 minutes (depends on connection)

### 3. Verify Installation
```bash
npm list
```

Should show a tree of installed packages without errors.

---

## Development Workflow

### Start Development Server
```bash
npm run dev
```

**Features:**
- Hot Module Replacement (HMR) - changes reload instantly
- Source maps for debugging
- Error overlay for quick debugging
- Auto-open at http://localhost:3000

### Stop Server
Press `Ctrl + C` in terminal

### Troubleshooting Port Issues
```bash
# Use different port if 3000 is busy
npm run dev -- --port 3001
```

---

## Building for Production

### Create Production Build
```bash
npm run build
```

**Output:**
- Creates `dist/` folder
- Minified and optimized files
- Ready for deployment
- ~150KB gzipped

### Preview Production Build
```bash
npm run preview
```

Opens at `http://localhost:4173`

---

## File Structure

```
portfolio-react/
├── node_modules/          # Dependencies (auto-created)
├── public/                # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   └── BackToTop.jsx
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   └── Contact.jsx
│   ├── App.jsx            # Main component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── dist/                  # Build output (after build)
├── index.html             # HTML template
├── vite.config.js         # Vite config
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
├── package.json           # Dependencies list
├── package-lock.json      # Locked versions
├── README.md              # Documentation
├── SETUP_GUIDE.md         # This file
└── .gitignore             # Git ignore rules
```

---

## NPM Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run deploy     # Deploy (custom script)
```

---

## IDE/Editor Setup (Recommended)

### VS Code Extensions to Install:
1. **ES7+ React/Redux/React-Native snippets** by dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** by bradlc.vscode-tailwindcss
3. **Prettier - Code formatter** by esbenp.prettier-vscode
4. **Thunder Client** or **REST Client** for API testing

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## Deployment Requirements by Platform

### Vercel
- GitHub account (optional)
- Vercel account (free)
- No additional setup needed

### Netlify
- GitHub/GitLab/Bitbucket account
- Netlify account (free)
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages
- GitHub repository
- GitHub account
- Push access to repo

### Docker
- Docker Desktop installed
- Docker account (optional)

---

## Environment Variables (if needed in future)

Create `.env.local` file:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Portfolio
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Troubleshooting

### Issue: `npm install` fails
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

### Issue: Port 3000 in use
```bash
# Find process using port
lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Kill process
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows
```

### Issue: Tailwind CSS not working
```bash
# Reinstall Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Issue: React not rendering
```bash
# Clear dist folder and rebuild
rm -rf dist
npm run build

# Check console for errors
npm run dev
```

---

## Performance Tips

1. **During Development:**
   - Use `npm run dev` for hot-reload
   - Keep DevTools closed for faster reloads
   - Avoid large file operations

2. **For Production:**
   - Use `npm run build`
   - Deploy to CDN (Vercel, Netlify)
   - Enable gzip compression
   - Cache static assets

3. **Code Optimization:**
   - Use React.memo for expensive components
   - Lazy load components with React.lazy
   - Optimize images before adding
   - Remove unused CSS

---

## Security Best Practices

1. **Never commit:**
   - `.env.local` files with secrets
   - Private API keys
   - Personal information

2. **Use:**
   - `.gitignore` to exclude node_modules
   - Environment variables for sensitive data
   - HTTPS for deployment

3. **Dependencies:**
   - Update regularly: `npm update`
   - Audit vulnerabilities: `npm audit`
   - Fix security issues: `npm audit fix`

---

## Additional Resources

- **Node.js Docs:** https://nodejs.org/docs
- **npm Docs:** https://docs.npmjs.com
- **React Docs:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Make your changes in `src/`
4. ✅ Test locally
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to chosen platform

---

**Last Updated:** March 2024

For questions or issues, refer to the README.md or SETUP_GUIDE.md

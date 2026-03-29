# Portfolio - Bhashaveni Ajay

A modern, premium, futuristic portfolio website built with **React**, **Tailwind CSS**, **Vite**, and **Framer Motion**.

## 🌟 Features

- ⚡ **Ultra-fast** with Vite
- 🎨 **Dark theme** with neon gradient accents (Blue/Purple/Pink)
- 📱 **Fully responsive** - Mobile, Tablet, Desktop
- ✨ **Smooth animations** using Framer Motion
- 🎯 **Single Page Scroll** with sticky navbar
- 🔙 **Back to Top** button
- 📊 **Skill proficiency bars** with animations
- 🎓 **Multiple sections** - Experience, Projects, Achievements, Certifications
- 🌐 **Social media links** with glow effects
- 📧 **Contact section** with all communication methods
- 🚀 **Ready for deployment**

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation bar
│   │   └── BackToTop.jsx      # Scroll to top button
│   ├── sections/
│   │   ├── Hero.jsx           # Hero/Landing section
│   │   ├── About.jsx          # About me section
│   │   ├── Skills.jsx         # Skills with proficiency
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Projects.jsx       # Featured projects
│   │   ├── Achievements.jsx   # Achievements & stats
│   │   ├── Certifications.jsx # Certifications & courses
│   │   ├── CodingProfiles.jsx # LeetCode, GitHub, etc
│   │   └── Contact.jsx        # Contact & social links
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd portfolio-react
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:3000`

## 📝 Customization

### Update Personal Information

Edit `src/sections/Hero.jsx` and other sections to update:
- Name and headline
- Description
- Social media links
- Email address

### Change Colors

Modify `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: "#00d4ff",    // Change blue
    purple: "#b000ff",  // Change purple
    pink: "#ff006e"     // Change pink
  }
}
```

### Update Content

Each section is in `src/sections/` - edit component content directly:
- Experience details
- Project descriptions
- Skills and certifications
- Achievements

### Add Resume Download

Place your resume file in `public/` folder and update Hero section:
```jsx
<a href="/resume.pdf" download>Download Resume</a>
```

## 🏗️ Build & Deployment

### Build for production:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview production build:
```bash
npm run preview
```

## 📤 Deploy Options

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

### **Netlify**
1. Build: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Connect your GitHub repo for auto-deployment

### **GitHub Pages**
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to `gh-pages` branch

### **AWS S3 + CloudFront**
```bash
npm run build
# Upload dist/ to S3 bucket
```

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Ultra-fast build tool
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 Fast initial load time
- 📦 Optimized bundle size (~150KB gzipped)
- 🖼️ Lazy loading for images
- 🚀 Code splitting with Vite

## 🎨 Design Features

### Dark Theme
- Professional dark color scheme (`#0a0e27`)
- Reduced eye strain
- Modern aesthetic

### Neon Accents
- Gradient text effects
- Glowing button hover states
- Color transitions on interactions

### Animations
- Scroll-triggered animations
- Smooth page transitions
- Hover effects on all interactive elements
- Floating background elements

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly buttons and spacing

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Content Sections

1. **Hero** - Name, headline, CTA buttons, social links
2. **About** - Personal intro, expertise, highlights
3. **Skills** - Programming, AI/ML, Embedded, Tools, Concepts
4. **Experience** - Work history with descriptions
5. **Projects** - Featured projects with tech stack
6. **Achievements** - Awards, recognition, stats
7. **Certifications** - Certs, courses, additional learning
8. **Coding Profiles** - LeetCode, GitHub, HackerRank
9. **Contact** - Email, social links, CTA

## 🔗 Social Links

- **Email:** bhashaveniajayyadav@gmail.com
- **GitHub:** https://github.com/Ajaybhashaveni
- **LinkedIn:** https://www.linkedin.com/in/ajay-bhashaveni-3a2aa8288
- **LeetCode:** https://leetcode.com/u/BAjay_1012/

## 📞 Support

For issues or questions, feel free to reach out via email or create an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Vite for the incredible build tool
- TailwindCSS for styling utilities
- Framer Motion for smooth animations
- Lucide React for beautiful icons

---

**Last Updated:** March 2024

Built with ❤️ by Bhashaveni Ajay

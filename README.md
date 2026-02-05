# Janya Mali - Portfolio Website

A modern, neo-brutalism style portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start for GitHub Pages Deployment

### Step 1: Update Repository Name
Before deploying, open `vite.config.github.ts` and update the `REPO_NAME`:

```typescript
const REPO_NAME = 'your-repo-name'; // Change this to match your GitHub repository name
```

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically deploy your site

### Step 4: Access Your Site
Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/your-repo-name/
```

## 📦 What's Included

- ✅ Responsive single-page portfolio
- ✅ Neo-brutalism design with neon purple accents
- ✅ Smooth scroll navigation
- ✅ Project showcase with filtering
- ✅ Interactive experience timeline
- ✅ Skills section with technology logos
- ✅ Education section with institution tabs
- ✅ GitHub Actions workflow for automatic deployment

## 🛠️ Local Development

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Build for Production
```bash
pnpm run build:github
```

## 📝 Customization

### Update Content
Edit `client/src/pages/Home.tsx` to update:
- Personal information
- Projects
- Work experience
- Skills
- Education

### Change Colors
The neon purple accent color is defined in `client/src/index.css`:
```css
--accent-hover: #a855f7;
```

### Add Your Resume
Replace the placeholder resume download link in the Resume section.

### Connect Social Links
Update the LinkedIn, Email, and GitHub URLs in the hero section.

## 🔧 Troubleshooting

### 404 Error on GitHub Pages
- Make sure you updated `REPO_NAME` in `vite.config.github.ts`
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow ran successfully in the Actions tab

### Build Fails
- Ensure all dependencies are installed: `pnpm install`
- Check for TypeScript errors: `pnpm run check`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Devicon](https://devicon.dev/)

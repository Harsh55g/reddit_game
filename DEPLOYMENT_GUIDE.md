# 🚀 Public Deployment Guide

This guide will help you deploy the Reddit Trivia Challenge to a public URL using Netlify, Vercel, or Render.

---

## 🌐 Option 1: Netlify (Recommended - Easiest)

### Method A: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   - When prompted for build command: `cd web && npm install && npm run build`
   - When prompted for publish directory: `web/dist`

### Method B: Deploy via Netlify Website (No CLI needed)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up/Login with GitHub, GitLab, or Email
3. Click **"Add new site"** → **"Deploy manually"**
4. Build your project first:
   ```bash
   cd web
   npm install
   npm run build
   ```
5. Drag and drop the `web/dist` folder to Netlify
6. Your site is live! 🎉

### Method C: Deploy from Git Repository

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://www.netlify.com/) and login
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your Git repository
5. Configure build settings:
   - **Base directory**: `web`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `web/dist`
6. Click **"Deploy site"**

---

## ⚡ Option 2: Vercel

### Method A: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Method B: Deploy via Vercel Website

1. Go to [vercel.com](https://vercel.com/)
2. Sign up/Login with GitHub, GitLab, or Bitbucket
3. Click **"Add New Project"**
4. Import your Git repository
5. Vercel auto-detects Vite settings
6. Override if needed:
   - **Build Command**: `cd web && npm install && npm run build`
   - **Output Directory**: `web/dist`
7. Click **"Deploy"**

---

## 🎨 Option 3: Render

1. Go to [render.com](https://render.com/)
2. Sign up/Login
3. Click **"New"** → **"Static Site"**
4. Connect your Git repository
5. Configure:
   - **Name**: reddit-trivia-challenge
   - **Build Command**: `cd web && npm install && npm run build`
   - **Publish Directory**: `web/dist`
6. Click **"Create Static Site"**

---

## 📦 Manual Build for Any Platform

If you want to build and upload manually to any hosting service:

1. **Navigate to web directory**:
   ```bash
   cd web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Upload the `dist` folder** to your hosting provider:
   - The `web/dist` folder contains all your production files
   - Upload this folder to any static hosting service
   - Popular options: GitHub Pages, Firebase Hosting, Surge, etc.

---

## 🔧 Quick Deploy Commands

### Netlify:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Vercel:
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## ✅ After Deployment

Once deployed, you'll get a public URL like:
- Netlify: `https://reddit-trivia-challenge.netlify.app`
- Vercel: `https://reddit-trivia-challenge.vercel.app`
- Render: `https://reddit-trivia-challenge.onrender.com`

You can share this URL with anyone!

---

## 🐛 Troubleshooting

### Build fails?
- Make sure you're in the correct directory
- Check that all dependencies are installed
- Verify `web/package.json` exists

### Page shows 404 on refresh?
- This is handled by `netlify.toml` and `vercel.json`
- For other platforms, configure SPA redirects

### Styles not loading?
- Check that the build completed successfully
- Verify all CSS files are in the `dist` folder

---

## 💡 Recommended: Netlify

For the easiest deployment experience, I recommend **Netlify's drag-and-drop method**:

1. Run: `cd web && npm install && npm run build`
2. Go to [netlify.com](https://www.netlify.com/)
3. Drag the `web/dist` folder
4. Done! ✨

Your Reddit Trivia Challenge will be live in seconds!

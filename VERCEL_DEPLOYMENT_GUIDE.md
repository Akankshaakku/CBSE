# Guide to Deploy on Vercel

This guide will walk you through deploying your React application to Vercel step-by-step.

## Prerequisites

1. **GitHub repository** - Your code should be pushed to GitHub (already done ✅)
2. **Vercel account** - Sign up at [vercel.com](https://vercel.com) (free account works)

---

## Method 1: Deploy via Vercel Website (Recommended - Easiest)

This is the easiest method and requires no command-line tools.

### Step 1: Sign Up / Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended - easiest integration)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find and select **"CBSE"** repository (or search for `Akankshaakku/CBSE`)
4. Click **"Import"**

### Step 3: Configure Project Settings

**IMPORTANT:** Since your React app is in the `frontend` folder, you need to configure the root directory:

1. In the project configuration page, find **"Root Directory"**
2. Click **"Edit"** next to Root Directory
3. Select **"frontend"** folder (or type `frontend`)
4. Click **"Continue"**

### Step 4: Build Settings (Usually Auto-Detected)

Vercel should automatically detect:
- **Framework Preset:** Create React App
- **Build Command:** `npm run build` (or `cd frontend && npm run build`)
- **Output Directory:** `build`
- **Install Command:** `npm install` (or `cd frontend && npm install`)

If you need to manually set:
- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

### Step 5: Environment Variables (If Needed)

If your app uses environment variables:
1. Click **"Environment Variables"**
2. Add any variables your app needs (e.g., API keys, endpoints)
3. Click **"Save"**

### Step 6: Deploy

1. Review all settings
2. Click **"Deploy"**
3. Wait for the deployment to complete (usually 2-3 minutes)

### Step 7: View Your Site

1. Once deployment is complete, you'll see a success message
2. Click on the deployment URL (e.g., `https://your-project.vercel.app`)
3. Your site is now live! 🎉

---

## Method 2: Deploy via Vercel CLI

If you prefer using the command line:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

Or use npx (no installation needed):
```bash
npx vercel
```

### Step 2: Navigate to Frontend Directory

```bash
cd frontend
```

### Step 3: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 4: Deploy

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time) or Yes (if updating)
- **Project name?** → Enter a name or press Enter for default
- **Directory?** → Press Enter (you're already in frontend)
- **Override settings?** → No (first time)

### Step 5: Deploy to Production

For production deployment:

```bash
vercel --prod
```

This will deploy to a production URL.

---

## Method 3: Deploy via GitHub Integration (Automatic)

This method automatically deploys whenever you push to GitHub.

### Step 1: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select your **CBSE** repository
4. Configure settings (set Root Directory to `frontend`)
5. Deploy once manually

### Step 2: Automatic Deployments

After the initial setup:
- Every push to `main` branch → Deploys to production
- Every push to other branches → Creates a preview deployment
- Every pull request → Creates a preview deployment

You don't need to do anything else - it's automatic!

---

## Update vercel.json (Optional but Recommended)

Your current `vercel.json` has some extra properties. Here's an optimized version:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Or you can simplify it to just:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The rewrites ensure React Router works correctly by redirecting all routes to `index.html`.

---

## Troubleshooting

### Issue: Build Fails

**Error:** "Module not found" or build errors
- **Solution:** Make sure Root Directory is set to `frontend` in Vercel settings

### Issue: Site Shows Blank Page

**Error:** Site loads but shows blank/white page
- **Solution:** 
  1. Check browser console for errors
  2. Ensure `vercel.json` has the rewrites configuration
  3. Check if API endpoints need to be configured

### Issue: Environment Variables Not Working

**Error:** Environment variables not accessible
- **Solution:**
  1. Add variables in Vercel dashboard → Project Settings → Environment Variables
  2. Redeploy after adding variables
  3. Make sure variable names match exactly (case-sensitive)

### Issue: Routes Don't Work (404 on page refresh)

**Error:** Direct URLs or page refresh shows 404
- **Solution:** The `rewrites` in `vercel.json` should handle this. Make sure it's configured correctly.

### Issue: Build Timeout

**Error:** Build takes too long and times out
- **Solution:**
  1. Reduce dependencies if possible
  2. Optimize build process
  3. Check if `node_modules` is being uploaded (shouldn't be - it's in `.gitignore`)

### Issue: Can't Find Root Directory

**Error:** Vercel can't find the project
- **Solution:**
  1. In project settings, explicitly set Root Directory to `frontend`
  2. Make sure the `frontend` folder contains `package.json`

---

## Environment Variables Setup

If your React app needs environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables:
   - **Name:** `REACT_APP_API_URL`
   - **Value:** `https://your-api-url.com`
   - **Environment:** Production, Preview, Development (select as needed)
3. Click **"Save"**
4. **Redeploy** your project

In your React code, access them with:
```javascript
process.env.REACT_APP_API_URL
```

**Note:** React requires the `REACT_APP_` prefix for environment variables.

---

## Custom Domain (Optional)

To add a custom domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click **"Add Domain"**
3. Enter your domain name (e.g., `www.yourschool.com`)
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

---

## Quick Command Summary

### Deploy with CLI:
```bash
cd frontend
npx vercel
```

### Deploy to Production:
```bash
cd frontend
npx vercel --prod
```

### View Deployments:
```bash
cd frontend
vercel ls
```

### View Logs:
```bash
cd frontend
vercel logs
```

---

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Check mobile responsiveness
- [ ] Test API endpoints (if any)
- [ ] Verify images and assets load correctly
- [ ] Test navigation between pages
- [ ] Check browser console for errors
- [ ] Set up custom domain (if needed)
- [ ] Configure environment variables
- [ ] Enable automatic deployments from GitHub

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/#vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

## Current Project Status

✅ **GitHub Repository:** `https://github.com/Akankshaakku/CBSE.git`
✅ **Vercel Configuration:** `frontend/vercel.json` exists
✅ **Ready to Deploy:** Yes!

Your project is ready for deployment! Follow **Method 1** above for the easiest deployment experience.


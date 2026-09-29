# 🚀 Deployment Guide - SCEND to Vercel

## Quick Start

Follow these steps to deploy your SCEND platform to Vercel for demo.

---

## Step 1: Commit to GitHub

### 1.1 Initialize Git (if not done)
```bash
git init
git branch -M main
```

### 1.2 Add Files
```bash
git add .
```

This will add:
- ✅ Client folder (Next.js app)
- ✅ README.md
- ✅ .gitignore
- ❌ Proposal files (excluded by .gitignore)
- ❌ Confidential docs (excluded by .gitignore)

### 1.3 Commit
```bash
git commit -m "Initial commit: SCEND executive protection platform"
```

### 1.4 Create GitHub Repository

**Option A: Using GitHub CLI (if installed)**
```bash
gh repo create scend --public --source=. --remote=origin --push
```

**Option B: Manual**
1. Go to https://github.com/new
2. Repository name: `scend`
3. Description: "Executive protection platform for Nigeria"
4. Set to **Public** or **Private** (your choice)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### 1.5 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/scend.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up / Log In to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" (or "Log In")
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Repository
1. Click "Add New..." → "Project"
2. Find your `scend` repository
3. Click "Import"

### 2.3 Configure Project Settings

**Root Directory:**
- Click "Edit" next to Root Directory
- Select `client` folder
- This tells Vercel where your Next.js app is

**Framework Preset:**
- Vercel should auto-detect **Next.js**
- If not, select "Next.js" from dropdown

**Build Settings:**
- Build Command: `npm run build` (auto-detected)
- Output Directory: `.next` (auto-detected)
- Install Command: `npm install` (auto-detected)

**Environment Variables:**
- None needed for demo
- Leave blank for now

### 2.4 Deploy
1. Click "Deploy"
2. Wait 1-3 minutes while Vercel:
   - Installs dependencies
   - Builds your Next.js app
   - Deploys to global CDN

### 2.5 Success!
Once complete, you'll see:
- ✅ Deployment successful
- 🌐 Your live URL: `https://scend-xxxxx.vercel.app`
- 📊 Performance metrics

---

## Step 3: Test Your Deployment

### 3.1 Visit Your Site
Click the deployment URL or visit:
```
https://your-project-name.vercel.app
```

### 3.2 Test All Pages
- ✅ Homepage loads with hero section
- ✅ Background image visible
- ✅ Navigation works
- ✅ Request form accessible at `/request`
- ✅ All sections display correctly
- ✅ Mobile responsive

### 3.3 Check Performance
Vercel shows:
- Lighthouse scores
- Load times
- Core Web Vitals

---

## Step 4: Custom Domain (Optional)

### 4.1 In Vercel Dashboard
1. Go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `www.scend.ng`

### 4.2 Configure DNS
Vercel will provide DNS records to add to your domain registrar.

**Typical Setup:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🎯 What Gets Deployed

### Included:
- ✅ Next.js client application
- ✅ All pages (homepage, request form)
- ✅ Images in public folder
- ✅ Tailwind CSS styles
- ✅ Optimized production build

### Excluded (via .gitignore):
- ❌ Proposal documents
- ❌ Confidential guides
- ❌ node_modules
- ❌ .env files
- ❌ Development files

---

## 📊 Vercel Features You Get

### Automatic:
- **Global CDN** - Fast worldwide
- **HTTPS/SSL** - Secure by default
- **Auto-scaling** - Handles traffic spikes
- **Preview deployments** - Every git push gets a preview URL
- **Analytics** - Built-in performance tracking

### Free Tier Includes:
- Unlimited deployments
- 100GB bandwidth/month
- Custom domains
- Automatic HTTPS

---

## 🔄 Future Updates

### After Initial Deployment:

Every time you push to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will:
1. Detect the push
2. Automatically rebuild
3. Deploy new version
4. Keep previous version as backup

---

## 🐛 Troubleshooting

### Build Fails:
- Check Vercel build logs
- Ensure `client/package.json` is correct
- Verify all dependencies are listed

### Images Not Showing:
- Check images are in `client/public/images/`
- Verify paths start with `/images/` not `./images/`
- Check image file names match exactly (case-sensitive)

### 404 Errors:
- Ensure Root Directory is set to `client`
- Check file structure matches Next.js app router

---

## 📱 Share Your Demo

Once deployed, share your live URL:
- With investors
- For user testing
- In presentations
- On LinkedIn

Example:
```
Check out SCEND - Nigeria's first tech-enabled executive protection platform!
🔗 https://scend.vercel.app
```

---

## ✅ Deployment Checklist

- [ ] .gitignore created (confidential files excluded)
- [ ] README.md added
- [ ] All changes committed to git
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account connected to GitHub
- [ ] Project imported to Vercel
- [ ] Root directory set to `client`
- [ ] Deployment successful
- [ ] Live URL accessible
- [ ] All pages tested
- [ ] Mobile responsive verified
- [ ] Share with stakeholders!

---

## 🎉 You're Live!

Your SCEND platform is now:
- 🌍 Live on the internet
- ⚡ Fast (global CDN)
- 🔒 Secure (HTTPS)
- 📈 Scalable (auto-scales)
- 🚀 Professional (production-ready)

**Ready to show investors and potential clients!**

# 🚀 GitHub Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"New"** button to create a new repository
3. Enter repository name: `hospital-appointment-booking`
4. Add description: `Full-stack hospital appointment booking application with Stripe payments, doctor ratings, and admin panel`
5. Choose **Public** (so others can see it)
6. Click **"Create repository"** (do NOT initialize with README)

## Step 2: Initialize Git Locally

Open PowerShell in the project directory and run:

```powershell
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
```

## Step 3: Add All Files to Git

```powershell
git add .
```

## Step 4: Make First Commit

```powershell
git commit -m "Initial commit: Full-stack hospital appointment booking app"
```

## Step 5: Add Remote Repository

Replace `USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/USERNAME/hospital-appointment-booking.git
git branch -M main
```

## Step 6: Push to GitHub

```powershell
git push -u origin main
```

You may be prompted to authenticate. Use:
- **Username**: Your GitHub username
- **Password**: A Personal Access Token (create at GitHub Settings → Developer settings → Personal access tokens)

## ✅ Your Code is Now on GitHub!

View at: `https://github.com/USERNAME/hospital-appointment-booking`

---

## 🌐 Deploy to Vercel (Frontend) or Heroku (Backend)

### Option A: Deploy Frontend to Vercel (FREE)

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Set root directory to `frontend`
6. Add environment variables in settings
7. Click "Deploy"

**Frontend URL**: Your app will be live!

### Option B: Deploy Backend to Heroku (FREE Tier Ended - Use Railway/Render)

#### Using Railway.app (Recommended):

1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub account
3. Create new project from GitHub
4. Select your repository
5. Add environment variables (JWT_SECRET, EMAIL_USER, EMAIL_PASS, STRIPE_SECRET_KEY)
6. Set start command: `npm run dev`
7. Railway will auto-deploy

**Backend URL**: Railway provides a live URL

---

## 📋 Environment Variables to Add

### Frontend (.env.local):
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
NEXT_PUBLIC_API_URL=https://your-backend-railway.railway.app
```

### Backend (.env):
```
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
STRIPE_SECRET_KEY=sk_test_your_key
PORT=5000
```

---

## 🎉 You're Deployed!

Your hospital appointment booking app is now live on the internet! 

- **Frontend**: vercel.com URL
- **Backend**: railway.app URL
- **Code**: github.com repository

Share the links with others to test your application!

# Deployment Guide

## Quick Deployment to Netlify

### Method 1: Direct Netlify Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Method 2: GitHub + Netlify Integration
1. Push to GitHub (see instructions below)
2. Connect repository in Netlify dashboard
3. Deploy automatically with these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

## GitHub Setup Instructions

Since Git is not available in this environment, follow these steps to push to GitHub:

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `dreamtrip-lottery` (or your preferred name)
4. Don't initialize with README (we already have one)

### 2. Download Project Files
1. Download all project files from this environment
2. Create a new folder on your computer
3. Copy all files to that folder

### 3. Initialize Git and Push
```bash
# Navigate to your project folder
cd dreamtrip-lottery

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: DreamTrip Dubai Lottery Platform"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/dreamtrip-lottery.git

# Push to GitHub
git push -u origin main
```

### 4. Connect to Netlify
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings are already configured in `netlify.toml`
5. Deploy!

## Environment Variables (Optional)

Add these in Netlify dashboard under Site Settings > Environment Variables:

```
VITE_API_URL=your-api-endpoint
VITE_PAYMENT_GATEWAY_KEY=your-payment-key
VITE_ANALYTICS_ID=your-analytics-id
```

## Build Configuration

The project includes:
- ✅ `netlify.toml` - Complete Netlify configuration
- ✅ `_redirects` - SPA routing configuration
- ✅ Optimized build settings
- ✅ Security headers
- ✅ Caching configuration

Your site will be live at: `https://your-site-name.netlify.app`
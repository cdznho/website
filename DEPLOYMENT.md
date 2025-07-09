# Deployment Guide for www.cedricdeschaut.com

## Quick Overview
Your website is ready for deployment! Here are the recommended hosting options:

## Option 1: Netlify (Recommended - Free & Easy)

### Step 1: Prepare for Deployment
1. Your website files are ready in `/Users/cedricdeschaut/code/website/`
2. Make sure your domain `www.cedricdeschaut.com` is purchased

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub/Google
3. Drag & drop your website folder or connect to GitHub
4. Your site will be live instantly with a netlify.app URL

### Step 3: Connect Your Domain
1. In Netlify dashboard, go to Site Settings > Domain Management
2. Add custom domain: `www.cedricdeschaut.com`
3. Update your domain's DNS settings (where you bought the domain):
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add A record: `@` → `75.2.60.5`
4. SSL certificate will be automatically provisioned

## Option 2: Vercel (Great for React/Next.js)

### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Connect your custom domain
4. Deploy with zero configuration

## Option 3: GitHub Pages (Free)

### Steps:
1. Create GitHub repository
2. Upload your website files
3. Enable GitHub Pages in Settings
4. Connect custom domain

## Option 4: Traditional Web Hosting

### Popular Options:
- **Namecheap**: $3-5/month
- **Bluehost**: $3-10/month  
- **SiteGround**: $7-15/month

### Steps:
1. Purchase hosting plan
2. Upload files via FTP/cPanel
3. Point domain to hosting nameservers

## DNS Configuration

### If you bought domain from:
**Namecheap:**
1. Go to Domain List > Manage
2. Advanced DNS > Add records
3. CNAME: `www` → `your-site.netlify.app`
4. A Record: `@` → `75.2.60.5`

**GoDaddy:**
1. Go to DNS Management
2. Add CNAME and A records as above

**Cloudflare:**
1. Add DNS records in dashboard
2. Enable proxy (orange cloud) for security

## Pre-Deployment Checklist
- ✅ Website files ready
- ✅ Domain purchased
- ✅ Images optimized
- ✅ Content updated
- ✅ Social links working
- ✅ Mobile responsive
- ✅ SSL ready

## Post-Deployment
1. Test all links and functionality
2. Check mobile responsiveness
3. Verify SSL certificate
4. Set up Google Analytics (optional)
5. Submit to Google Search Console

## Need Help?
- Netlify has excellent documentation
- Most hosting providers offer 24/7 support
- DNS changes can take 24-48 hours to propagate

Your website is professional and ready for launch! 🚀
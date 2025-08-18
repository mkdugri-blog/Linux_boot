# GitHub Pages Deployment Guide

This guide will help you deploy your Linux Boot Process blog to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your project files ready

## 🚀 Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository settings:
   - **Name**: `linux-boot-process` (or your preferred name)
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Don't initialize with README (we already have one)
5. Click "Create repository"

### 2. Upload Your Code

#### Option A: Using Git Command Line
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Linux boot process blog"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Desktop
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Clone your new repository to your computer
3. Copy your project files into the cloned folder
4. Commit and push the changes

#### Option C: Upload Files Directly
1. In your GitHub repository, click "uploading an existing file"
2. Drag and drop all your project files
3. Write a commit message
4. Click "Commit changes"

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (in the repository tabs)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
5. GitHub will automatically detect the workflow file

### 4. Automatic Deployment

Once you've pushed your code and enabled GitHub Pages:

1. Go to the "Actions" tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`

### 5. Update Site URL (Optional)

Update the meta tags in `client/index.html` to reflect your actual URL:
```html
<meta property="og:url" content="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME" />
```

## 🔄 Making Updates

After your initial deployment, any time you push changes to the main branch:

1. Your site will automatically rebuild
2. Changes will be live within a few minutes
3. You can monitor the deployment in the "Actions" tab

## ❓ Troubleshooting

### Build Fails
- Check the "Actions" tab for error details
- Ensure all dependencies are properly listed
- Make sure the workflow file is in `.github/workflows/deploy.yml`

### Site Not Loading
- Verify GitHub Pages is enabled in repository settings
- Check that your repository is public
- Wait a few minutes for DNS propagation

### Wrong Content Showing
- Clear your browser cache
- Check the "Actions" tab to ensure deployment completed
- Verify you pushed your latest changes

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file in the repository root with your domain
2. Configure your domain's DNS settings
3. Enable "Enforce HTTPS" in Pages settings

## 📱 Testing Your Site

After deployment, test your site:
- ✅ Navigation works smoothly
- ✅ Interactive flowchart responds to clicks
- ✅ Mobile version displays correctly
- ✅ All content loads properly
- ✅ Dark theme applies correctly

## 🎉 You're Live!

Congratulations! Your Linux Boot Process blog is now live on GitHub Pages. Share the link with others and enjoy your interactive educational content.

**Your site URL**: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`

---

Need help? Open an issue in your GitHub repository or check the GitHub Pages documentation.
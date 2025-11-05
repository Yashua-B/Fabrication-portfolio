# Joshua Barzideh - Portfolio Website

A beautiful, minimalistic single-page portfolio website showcasing architectural works. Features smooth scrolling, elegant animations, and interactive YouTube video popups.

## ✨ Features

- **Single-page scrolling design** - Smooth navigation through your portfolio
- **Responsive layout** - Looks great on desktop, tablet, and mobile devices
- **Interactive YouTube videos** - Click on QR codes to watch project videos in a modal popup
- **Elegant animations** - Fade-in effects and subtle hover interactions
- **Lightweight & fast** - Pure HTML, CSS, and JavaScript (no frameworks needed)
- **GitHub Pages ready** - Easy deployment and hosting

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main webpage
├── styles.css          # All styling and animations
├── script.js           # YouTube modal and scroll animations
├── README.md           # This file
└── images/             # Portfolio page images
    ├── bowtie clip_01.png
    ├── bowtie clip_02.png
    ├── bowtie clip_03.png
    ├── bowtie clip_04.png
    ├── bowtie clip_05.png
    ├── bowtie clip_06.png (Forest project - with YouTube link)
    ├── bowtie clip_07.png (Stitch project - with YouTube link)
    └── bowtie clip_08.png
```

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `portfolio` or `my-work`)
5. Make sure it's set to **Public**
6. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Website (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Create a new folder by typing `images/` in the file name field
4. Upload all PNG files to the `images` folder
5. Click **"Commit changes"**

**Option B: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd "path/to/your/project"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top right)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"main"** branch
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

### Step 4: View Your Website! 🎉

Your website will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://joshuabarzideh.github.io/portfolio/`

## 🎨 Customization

### Changing Colors

Edit `styles.css` and modify these values:

```css
/* Background gradient */
body {
    background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);
}

/* Card background */
.portfolio-page {
    background: #ffffff;
}
```

### Adding More Pages

1. Add your new PNG to the `images/` folder
2. Add this code in `index.html` before the closing `</div>`:

```html
<div class="portfolio-page" data-page="9">
    <img src="images/your-new-page.png" alt="Description">
</div>
```

### Adding More YouTube Links

1. In `index.html`, add this to any page:

```html
<div class="youtube-hotspot" data-video-id="YOUR-VIDEO-ID"></div>
```

Replace `YOUR-VIDEO-ID` with the ID from the YouTube URL.
Example: `https://youtu.be/ABC123` → use `ABC123`

## 💡 Tips

- **Image size**: Keep images under 5MB each for fast loading
- **Image format**: PNG works best for document pages with text
- **Mobile testing**: View your site on your phone to check responsiveness
- **Updates**: Just upload new files to GitHub to update your site

## 🛠️ Troubleshooting

**Website not showing after deployment?**
- Wait 5-10 minutes for GitHub Pages to build
- Check that you enabled Pages in Settings
- Make sure `index.html` is in the root folder (not in a subfolder)

**Images not loading?**
- Check that image filenames match exactly (including spaces)
- Make sure all images are in the `images/` folder
- Check for typos in `index.html`

**YouTube videos not playing?**
- Check that video IDs are correct
- Make sure videos are not private on YouTube
- Try in a different browser

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Feel free to use this code for your own portfolio!

---

**Need help?** Check the comments in the code files - they explain how everything works!

Built with ❤️ using pure HTML, CSS, and JavaScript.


# IT Support Specialist Portfolio Website

## 📋 Overview
A modern, responsive portfolio website showcasing your IT support skills, experience, and projects. Built with HTML5, CSS3, and JavaScript with smooth animations and interactive elements.

## ✨ Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated skill bars
- ✅ Interactive project cards
- ✅ Professional timeline for work experience
- ✅ Contact form
- ✅ Modern gradient design
- ✅ SEO optimized
- ✅ Fast loading performance

## 📁 File Structure
```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Customize Your Information

#### **Replace Placeholder Text:**
Open `index.html` and update:

- **Line 7:** Change "Your Name" to your actual name
- **Hero Section (lines 40-45):** Update title and description
- **About Section (lines 73-95):** Add your personal bio and photo
- **Contact Section (lines 520-560):** Add your email, phone, LinkedIn, GitHub

#### **Add Your Photo:**
Replace the placeholder in the About section:
```html
<!-- Replace this div: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
    <p>Add Your Photo Here</p>
</div>

<!-- With your actual image: -->
<img src="your-photo.jpg" alt="Your Name" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
```

#### **Update Contact Details:**
In the Contact section, update:
- Email addresses (replace `your.email@example.com`)
- Phone number (replace `+44 xxxx xxxxxx`)
- LinkedIn URL (replace `linkedin.com/in/yourprofile`)
- GitHub URL (replace `github.com/yourprofile`)
- YouTube channel (optional, or remove)

### 2. Customize Skills
In `index.html`, adjust skill levels by changing the `width` percentage:
```html
<div class="skill-progress" style="width: 95%"></div>
```
- Expert: 90-95%
- Advanced: 80-89%
- Intermediate: 65-79%
- Basic: 50-64%

### 3. Add/Remove Projects
Add new projects by copying and modifying project card sections (lines 305-370).

### 4. Update Work Experience
Modify timeline items in the Experience section (lines 380-460) with your actual job details.

### 5. Customize Colors
In `styles.css`, modify the color scheme at the top (lines 4-15):
```css
:root {
    --primary-color: #0066cc;        /* Main blue */
    --secondary-color: #00a8e8;      /* Accent blue */
    --accent-color: #ff6b35;         /* Orange accent */
    /* Modify these to match your brand */
}
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (FREE & RECOMMENDED)
1. Create a GitHub account at github.com
2. Create a new repository named `your-username.github.io`
3. Upload all files (index.html, styles.css, script.js)
4. Go to Settings → Pages
5. Set source to "main" branch
6. Your site will be live at: `https://your-username.github.io`

### Option 2: Netlify (FREE)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant deployment
4. Custom domain available

### Option 3: Vercel (FREE)
1. Sign up at vercel.com
2. Import your GitHub repository or upload files
3. Automatic deployment and custom domain

### Option 4: Traditional Web Hosting
Upload files via FTP to any web hosting provider:
- Bluehost
- HostGator
- SiteGround
- GoDaddy

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

### Option A: EmailJS (Recommended - FREE)
1. Sign up at emailjs.com
2. Create an email service
3. Get your Service ID and Template ID
4. Uncomment lines 67-75 in `script.js`
5. Replace with your EmailJS credentials
6. Add EmailJS CDN to `index.html` before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

### Option B: Formspree (FREE)
1. Sign up at formspree.io
2. Create a form and get your endpoint
3. Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option C: Backend Integration
Connect to your own backend API or server-side script.

## 🎨 Customization Tips

### Change Font
Add to `<head>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
Then update `styles.css`:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Icons
Using Font Awesome (already included). Find more icons at fontawesome.com

### Modify Animations
Adjust animation speeds in `styles.css` and `script.js`

## 📱 Testing

### Test Responsiveness:
1. Open in browser (Chrome recommended)
2. Press F12 to open Developer Tools
3. Click device toggle icon
4. Test on different screen sizes

### Test on Real Devices:
- Use your phone/tablet
- Test on different browsers (Chrome, Firefox, Safari)

## 🔍 SEO Optimization

### Update Meta Tags in `index.html`:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Keywords, Here">
```

### Add to Google Search Console:
1. Verify ownership
2. Submit sitemap
3. Monitor performance

## 📊 Analytics (Optional)

### Add Google Analytics:
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🐛 Troubleshooting

### Images Not Loading?
- Check file paths are correct
- Ensure images are in the same folder or correct subfolder
- Use relative paths: `./images/photo.jpg`

### Form Not Working?
- Check browser console for errors (F12)
- Verify EmailJS/Formspree setup
- Test with simple alert first

### CSS Not Applying?
- Clear browser cache (Ctrl+Shift+R)
- Check file names match exactly
- Verify CSS file is in same folder

### Mobile Menu Not Working?
- Check JavaScript loaded correctly
- Ensure script.js is linked properly
- Test in different browsers

## 📋 Checklist Before Publishing

- [ ] Replace all placeholder text with your information
- [ ] Add your professional photo
- [ ] Update all contact details (email, phone, LinkedIn)
- [ ] Customize color scheme to match your brand
- [ ] Review all skills and adjust percentages
- [ ] Add/update projects with real examples
- [ ] Update work experience with accurate dates
- [ ] Test contact form functionality
- [ ] Test on mobile devices
- [ ] Test in multiple browsers
- [ ] Optimize images (compress for faster loading)
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Submit to search engines


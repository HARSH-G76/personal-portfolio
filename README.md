# Harsh Chauhan — Anonymous Hacker Portfolio OS

A personal portfolio website styled as an **Anonymous hacker + Linux/KDE-style desktop OS** running entirely in the browser. Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

## Features

- **Boot sequence** — fake Linux boot screen with progress bar and skip option
- **Desktop OS layout** — top panel with live clock, desktop icons, macOS-style dock with magnification
- **Draggable & resizable windows** — traffic-light buttons (close/minimize/maximize), z-index focus management, position memory
- **Matrix rain** canvas background (performance-capped at 30fps, pauses when tab hidden)
- **Anonymous Guy Fawkes mask** rendered as inline SVG with glow, float, and glitch animations
- **CRT scanlines, flicker, and vignette** overlay with toggle (respects `prefers-reduced-motion`)
- **Interactive terminal** — 20+ commands, history, tab autocomplete, fake hack animation
- **Offline AI assistant** — keyword-matching Q&A about Harsh (no API, no data leaves browser)
- **Projects** — 5 project cards with 3D tilt, filter, detail modal, live demo & code links
- **Skills** — KDE System Settings-style window with animated bars and rings, category sidebar
- **Experience timeline** — glowing animated nodes
- **Certificates gallery** — data-driven grid with lightbox (next/prev/ESC), category filters
- **Resume viewer** — embedded PDF with HTML fallback, download & print buttons
- **Blog** — 3 sample posts with tag filter, reading time, read-more modal
- **Contact form** — validation, mailto: fallback, Formspree/EmailJS ready, click-to-copy email
- **Easter egg** — Konami code triggers "Access Granted / You are now Anonymous" screen
- **Command palette** — Ctrl+K to jump to any window
- **Dark/Light theme toggle** — remembered in localStorage
- **Visitor counter** — localStorage-based
- **Fully responsive** — mobile switches to stacked sheets + bottom nav bar

## Folder Structure

```
.
├── index.html          # Main HTML structure
├── style.css           # Complete stylesheet (themes, windows, dock, animations, responsive)
├── script.js           # All application logic + CONFIG data object
├── README.md           # This file
└── assets/
    ├── photo/
    │   └── avatar.png       # Your profile photo (optional — shows initials fallback)
    ├── projects/
    │   ├── project1.png     # Chat App screenshot
    │   ├── project2.png     # Miss Punch Tracker screenshot
    │   ├── project3.png     # Microsoft Homepage Clone screenshot
    │   ├── project4.png     # HR Foundation NGO screenshot
    │   └── project5.png     # Rama Hospital screenshot
    ├── certificates/
    │   ├── cert1.png        # Internship Certificate
    │   ├── cert2.png        # Best Intern Certificate
    │   └── cert3.png        # ISP Direct Entry Certificate
    └── resume.pdf           # Your resume PDF
```

## How to Customize

### Edit All Personal Content in One Place

Open `script.js` and find the `CONFIG` object at the very top (section 1). Everything — name, role, skills, projects, certificates, blog posts, social links — is defined there. Edit values in that object and everything updates across the site.

### Add a Profile Photo

Place your photo at `assets/photo/avatar.png`. If the file is missing, a green initials fallback ("HC") is shown automatically.

### Add Project Screenshots

Place images at `assets/projects/project1.png` through `project5.png`. If an image is missing, a green glitch gradient box with the project name is shown.

To add a **new project**, add an entry to `CONFIG.projects` in `script.js`:
```js
{
  title: 'New Project',
  desc: 'Description here',
  tech: ['HTML', 'CSS'],
  demo: 'https://link-to-demo',
  code: 'https://github.com/...',
  image: 'assets/projects/project6.png',
  category: 'web',
  features: ['Feature 1', 'Feature 2'],
}
```

### Add Certificates

Place images at `assets/certificates/cert1.png`, `cert2.png`, etc.

To add a **new certificate**, add an entry to `CONFIG.certificates` in `script.js`:
```js
{ title: 'New Certificate', issuer: 'Issuer Name', date: '2024', image: 'assets/certificates/cert4.png', category: 'achievement' }
```

### Add Blog Posts

Add an entry to `CONFIG.blog` in `script.js`:
```js
{
  title: 'Post Title',
  excerpt: 'Short summary...',
  content: 'Full article text...\n\nParagraphs separated by \\n',
  tags: ['Tag1', 'Tag2'],
  date: '2024-10-01',
  readTime: 3, // minutes
}
```

### Set Up the Contact Form

The contact form works immediately with a **mailto: fallback** — when submitted, it opens the user's email client with the message pre-filled.

To use **Formspree** instead:
1. Create a form at [formspree.io](https://formspree.io) and get your endpoint URL
2. Open `script.js`, find the `buildContact` function
3. Set `FORMSPREE_ENDPOINT` to your URL:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id';
   ```

To use **EmailJS**:
1. Include the EmailJS SDK in `index.html`
2. Replace the fetch call in the contact form handler with `emailjs.send('service_id','template_id', formData)`

## How to Deploy

### GitHub Pages
1. Push all files to a GitHub repository
2. Go to **Settings > Pages**
3. Set source to **main branch** / **root**
4. Your site will be live at `https://username.github.io/repo-name/`

### Netlify
1. Drag and drop the project folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo and deploy automatically

No build step is needed — just upload the files as-is.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Open command palette |
| `↑` / `↓` | Terminal history (in terminal) |
| `Tab` | Terminal autocomplete |
| `Esc` | Close lightbox/modals/palette |
| `↑↑↓↓←→←→ B A` | Konami code easter egg |

## Browser Support

Works in all modern browsers (Chrome, Firefox, Edge, Safari). Mobile layout activates below 768px width.

## Tech

- Pure HTML5 / CSS3 / Vanilla JavaScript (ES6+)
- Google Fonts: Share Tech Mono, JetBrains Mono, Orbitron
- Font Awesome 6 (icons via CDN)
- No frameworks, no build step, no dependencies

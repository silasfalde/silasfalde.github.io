# silasfalde.com

Single-page static resume site for **Silas Falde** — Data Science major at the University of Michigan.

## Stack

- **HTML** — single `index.html` with inlined content
- **CSS** — organized in `css/` (variables, layout, hero, sections)
- **JavaScript** — organized in `js/` (main, logo, nav, video)
- No Node.js, no build step. Serve the files as-is.

## Project structure

```
├── index.html       # Full page (header, hero, sections, footer)
├── favicon.svg      # Site favicon
├── css/
│   ├── variables.css  # Design tokens, reset, base
│   ├── layout.css     # Main, header, footer, section shell, scroll indicator
│   ├── hero.css       # Hero, video, overlay, signature, mute button
│   └── sections.css   # About, timeline, education, projects, skills
├── js/
│   ├── main.js       # Footer year
│   ├── logo.js       # Header logo line width
│   ├── nav.js        # Active nav, scroll indicator, hero-in-view
│   └── video.js      # YouTube hero video, mute, visibility on scroll
└── README.md
```

## Edit content

- **Header, nav, footer links** — edit `index.html` (search for "Silas Falde", nav list, footer links).
- **Resume content** — edit the sections in `index.html` (About, Experience, Education, Projects, Skills, Contact).
- **Hero video** — video ID is in `js/video.js` (`YltidP2WmJo`). Replace with your own YouTube ID if needed.
- **Design tokens** — edit `css/variables.css` (colors, spacing, typography).

## Deploy

1. Upload the project folder to your host (DigitalOcean App Platform static site, Netlify, Vercel, GitHub Pages, S3, etc.).
2. No build command. Set **output directory** to `.` (current directory) or the folder containing `index.html`.
3. Point **silasfalde.com** to the deployment via DNS.

### DigitalOcean App Platform (static site)

- **Source:** Connect your Git repo.
- **Build command:** Leave empty (or use a no-op like `echo done`).
- **Output directory:** `.` (root).
- Or use **Static Site** and point to the directory with `index.html`.

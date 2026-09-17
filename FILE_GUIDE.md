# 📚 File Guide - Component & Configuration Reference

## 📂 Directory Structure

```
prospertynextjs/
├── app/                          # Next.js App Router directory
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.js                # Root HTML layout & head
│   └── page.js                  # Main page & navigation logic
│
├── components/                   # React components
│   ├── Header.js                # Navigation bar
│   ├── Hero.js                  # Hero section with slider
│   ├── About.js                 # About section
│   ├── Portfolio.js             # Portfolio/projects section
│   ├── Services.js              # Services carousel
│   ├── Blog.js                  # Blog/news section
│   ├── FAQ.js                   # FAQ accordion
│   └── Footer.js                # Footer
│
├── public/                       # Static files
│   └── indexassets/             # Local images
│       ├── logo.png
│       ├── 3d-rendering-isometric-fdgdf 1 (1).png
│       └── [other images]
│
├── Configuration Files
│   ├── package.json             # Dependencies & scripts
│   ├── next.config.js           # Next.js settings
│   ├── tailwind.config.js       # Tailwind theme config
│   ├── postcss.config.js        # PostCSS plugins
│   ├── jsconfig.json            # Path aliases
│   └── .gitignore               # Git ignore rules
│
└── Documentation
    ├── README.md                # Project overview
    ├── SETUP.md                 # Installation guide
    ├── FIXES_APPLIED.md         # What was fixed
    └── FILE_GUIDE.md            # This file
```

---

## 🔧 Configuration Files

### `package.json`
- Lists all dependencies
- Defines npm scripts: `dev`, `build`, `start`, `lint`
- Specifies Node.js version requirements

**Key Dependencies:**
- `next` - Next.js framework
- `react`, `react-dom` - React library
- `tailwindcss` - CSS framework
- `postcss`, `autoprefixer` - CSS processing

### `next.config.js`
- Configures Next.js image optimization
- Allows external image domains (Unsplash, Pinimg)
- Sets up environment variables

### `tailwind.config.js`
- Defines custom colors: gold, ink, cream
- Configures custom fonts
- Sets up responsive breakpoints

### `postcss.config.js`
- Enables Tailwind CSS processing
- Adds autoprefixer for browser compatibility

### `jsconfig.json`
- Sets up path aliases for cleaner imports
- Example: `@/*` refers to project root

---

## 💅 Styling (`app/globals.css`)

The main CSS file contains:

### Color Variables (Lines 3-23)
```css
:root {
  --gold: #ff8528;
  --ink: #053384;
  --cream: #faf8f4;
  /* ... more colors */
}
```

### Component Styles

1. **Header** (Lines 50-200)
   - `.site-header` - Sticky navigation
   - `.brand` - Logo & branding
   - `.nav` - Navigation links
   - `.dropdown-menu` - Dropdown menus

2. **Hero** (Lines 200-350)
   - `.hero` - Hero section container
   - `.hero-slide` - Background image slider
   - `.hero-inner` - Text content
   - `.btn` - Button styles

3. **About** (Lines 350-420)
   - `.about-section` - About section
   - `.about-container` - Grid layout
   - `.about-content` - Text content
   - `.about-image` - Image container

4. **Portfolio** (Lines 420-550)
   - `.stack-cards` - Card container
   - `.stack-card` - Individual card

5. **Services** (Lines 550-650)
   - `.services-carousel` - Carousel container
   - `.services-carousel-item` - Service card
   - `.svc-arrow` - Navigation arrows

6. **Blog** (Lines 650-750)
   - `.ls-card` - Blog article card
   - `.ls-featured` - Featured article
   - `.ls-mini` - Mini article

7. **FAQ** (Lines 750-850)
   - `.faq-item` - FAQ container
   - `.faq-header` - Question header
   - `.faq-content` - Answer content

8. **Footer** (Lines 850-950)
   - `footer` - Footer container
   - `.footer-logo-wrapper` - Logo styling

---

## 🎯 Components

### `Header.js`
**Purpose:** Navigation header  
**Key Features:**
- Sticky positioning
- Dropdown menus for services, research, NRI
- Logo from `/indexassets/logo.png`

**Props:** None (standalone component)

**State:** None required

### `Hero.js`
**Purpose:** Landing section with auto-rotating slider  
**Key Features:**
- Auto-rotating image slider (6 second interval)
- Hero text & tagline
- Call-to-action buttons
- Smooth fade transitions

**State:**
- `activeSlide` - Current slide index

**Images:** Unsplash URLs (background images)

### `About.js`
**Purpose:** About company section  
**Key Features:**
- Two-column layout
- Company description
- 3D rendering image from `/indexassets/3d-rendering-isometric-fdgdf 1 (1).png`

**Images:** Local asset

### `Portfolio.js`
**Purpose:** Project portfolio section  
**Key Features:**
- Stacking cards with hover effects
- Background images
- Overlay text
- Multiple cards (3 example cards)

**Images:** External Unsplash URLs

### `Services.js`
**Purpose:** Services carousel section  
**Key Features:**
- Horizontal scrollable carousel
- Auto-play functionality
- Previous/Next navigation arrows
- 9 service cards with images

**Refs:** `carouselRef` - Reference to carousel element

**Functions:**
- `moveCarousel(direction)` - Scroll carousel
- `startAutoScroll()` - Begin auto-play
- `stopAutoScroll()` - Pause auto-play

**Images:** External URLs + Pinimg

### `Blog.js`
**Purpose:** Blog/news section  
**Key Features:**
- Featured article (full description)
- Mini article cards (4 items)
- Responsive grid layout
- Image galleries

**Images:** External Unsplash URLs

### `FAQ.js`
**Purpose:** Frequently Asked Questions accordion  
**Key Features:**
- Single-open accordion behavior
- 8 FAQ items
- Smooth expand/collapse animations
- Two-column responsive grid

**State:**
- `activeFAQ` - Currently open FAQ index

### `Footer.js`
**Purpose:** Footer with contact & links  
**Key Features:**
- Brand information
- Quick links
- Services list
- Contact information
- Social media links
- Company info

**Images:** Logo from `/indexassets/logo.png`

---

## 🔄 Page Component (`app/page.js`)

**Purpose:** Main page component that orchestrates all sections

**Features:**
- Imports all section components
- Sets up navigation scroll tracking
- Manages active link highlighting

**Navigation Logic:**
- Tracks scroll position
- Updates active navigation link based on visible section
- Smooth scroll behavior

---

## 📱 Responsive Breakpoints

All components are responsive using Tailwind CSS:

| Breakpoint | Size | Class |
|-----------|------|-------|
| Mobile | < 640px | `sm:` |
| Tablet | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Large Desktop | ≥ 1280px | `xl:` |

---

## 🎨 Color Usage

| Name | Hex | Used For |
|------|-----|----------|
| Gold | #ff8528 | Accents, buttons, hover states |
| Ink | #053384 | Main text, headings |
| Cream | #faf8f4 | Background sections |
| White | #ffffff | Light backgrounds |
| Muted | #666 | Secondary text |

---

## 📸 Image Paths Reference

### Local Images (in public/indexassets/)
```
/indexassets/logo.png
/indexassets/3d-rendering-isometric-fdgdf 1 (1).png
```

### External Images (Unsplash)
```
https://images.unsplash.com/photo-[id]?q=80&w=1200&auto=format&fit=crop
```

### External Images (Pinimg)
```
https://i.pinimg.com/[dimensions]/[id].jpg
```

---

## 🚀 How to Modify

### Change Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --gold: #your-color;
  --ink: #your-color;
  /* ... */
}
```

### Change Content
Edit the component files directly:
- Text: Update JSX strings
- Images: Change image URLs/paths
- Links: Update href attributes

### Change Layout
- Modify Tailwind classes
- Adjust CSS in globals.css
- Update component grid/flex properties

### Add New Sections
1. Create new component in `components/`
2. Import in `app/page.js`
3. Add to JSX structure
4. Style with globals.css or Tailwind

---

## 🧪 Testing Components

### Navigation
- Click nav links → should scroll to sections
- Section should highlight in nav

### Hero
- Should see rotating images every 6 seconds
- Buttons clickable

### Services
- Carousel should scroll smoothly
- Auto-play every 4 seconds
- Arrows should navigate

### FAQ
- Click question → should expand
- Click another → first closes
- Smooth animations

### Responsive
- Resize browser window
- Elements should adapt
- Mobile menu should work

---

## 📞 Quick Reference

| Need | File | Line |
|------|------|------|
| Change colors | `app/globals.css` | 3-23 |
| Add new font | `tailwind.config.js` | 10-15 |
| Change logo | `components/Header.js` | 8-14 |
| Modify hero text | `components/Hero.js` | 35-38 |
| Update contact | `components/Footer.js` | 95-105 |
| Add FAQ | `components/FAQ.js` | 5-65 |

---

**Last Updated:** 2026-09-15  
**Status:** ✅ All components working

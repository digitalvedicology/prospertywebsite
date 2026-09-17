# Prosperty Real Estate - Next.js Website

A modern, responsive Next.js website for Prosperty Real Estate Advisors with premium design and interactive components.

## Features

- **Next.js 14** with App Router
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components**:
  - Auto-rotating hero slider
  - Services carousel with navigation
  - Accordion FAQs
  - Blog/news section
  - Smooth scrolling navigation
- **Optimized Images** - Next.js Image optimization
- **SEO Ready** - Meta tags and semantic HTML
- **Smooth Animations** - CSS transitions and reveal effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd prospertynextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
prospertynextjs/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/
│   ├── Header.js         # Navigation header
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── Portfolio.js      # Portfolio/projects
│   ├── Services.js       # Services carousel
│   ├── Blog.js           # Blog/news section
│   ├── FAQ.js            # FAQ accordion
│   └── Footer.js         # Footer
├── public/
│   └── indexassets/      # Images and assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Key Components

### Header
- Sticky navigation with dropdown menus
- Active link highlighting on scroll
- Responsive mobile menu

### Hero Section
- Auto-rotating image slider
- Call-to-action buttons
- Smooth fade transitions

### Services Carousel
- Horizontal scrolling carousel
- Auto-play functionality
- Navigation arrows

### Blog Section
- Featured article with full description
- Mini cards for additional posts
- Responsive grid layout

### FAQ Accordion
- Single-open accordion behavior
- Smooth expand/collapse animations
- Grid layout for desktop

## Customization

### Colors
Update the CSS variables in `app/globals.css`:
```css
:root {
  --gold: #ff8528;
  --ink: #053384;
  --cream: #faf8f4;
  /* ... more colors */
}
```

### Tailwind Configuration
Edit `tailwind.config.js` to customize theme colors and fonts.

### Content
All content is hardcoded in components. To change:
- Hero slides: Edit `components/Hero.js`
- Services: Edit `components/Services.js`
- Blog posts: Edit `components/Blog.js`
- FAQs: Edit `components/FAQ.js`

## Images

External images are loaded from Unsplash and Pinimg. To use local images:

1. Place images in `public/` directory
2. Import using Next.js `Image` component:
```jsx
import Image from 'next/image'

<Image src="/your-image.jpg" alt="description" width={800} height={600} />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Image optimization with Next.js Image
- CSS modules and Tailwind CSS for efficient styling
- Lazy loading for images
- Optimized JavaScript bundles

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ is available

## License

All rights reserved © 2024 Prosperty Real Estate Advisors

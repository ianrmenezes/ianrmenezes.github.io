# Portfolio Website - Code Documentation

## 📁 Project Structure Overview

Your portfolio is built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Here's how everything works together:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with backgrounds
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles & scroll behavior
├── components/            # React components
│   ├── Hero.tsx           # Landing section with navigation
│   ├── About.tsx          # About Me section
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Project showcase
│   ├── SkillsMarquee.tsx  # Skills marquee animation
│   ├── Footer.tsx         # Footer with social links
│   └── backgrounds/       # Animated background components
├── data/                  # Data files
│   ├── skills.tsx         # All your technical skills
│   ├── experience.ts      # Work experience data
│   └── projects.ts        # Project portfolio data
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 🎨 How the Visual Design Works

### Background System
- **Two-layer system**: `BeamsBackground` + `BackgroundPaths` (waves)
- **Fixed positioning**: Backgrounds stay in place while content scrolls
- **Z-index layering**: Backgrounds (-z-50) → Content (z-10) → Modals (z-50)

### Animations
- **Framer Motion**: Handles all entrance animations and hover effects
- **useInView hook**: Triggers animations when sections become visible
- **Scroll behavior**: Smooth scrolling between sections

### Responsive Design
- **Mobile-first**: Uses Tailwind's responsive prefixes (`md:`, `lg:`)
- **Flexible layouts**: Adapts from mobile to desktop seamlessly

## 🔧 Key Features Explained

### 1. Smooth Scrolling Navigation
**File**: `src/components/Hero.tsx`
- Navigation buttons use `scrollToSection()` function
- Dual-method approach: `scrollIntoView()` + `window.scrollTo()` for compatibility
- Prevents multiple rapid clicks with `isScrolling` state

### 2. Skills Marquee
**File**: `src/components/SkillsMarquee.tsx`
- Continuous horizontal scrolling animation
- Each skill has custom icon, color, and size
- Organized by categories (frontend, backend, mobile, devops)

### 3. Social Media Integration
**File**: `src/components/Footer.tsx`
- Custom hover colors per platform (GitHub=green, LinkedIn=blue, Email=yellow)
- Opens links in new tabs with security attributes
- Back-to-top button with dual scroll methods

### 4. Project Showcase
**File**: `src/components/Projects.tsx`
- Dynamic project cards with hover effects
- Image handling with cache-busting for updates
- Filter by technology or project type

## 📝 How to Update Content

### Adding New Skills
1. Open `src/data/skills.tsx`
2. Import new icon from `react-icons/si` or create custom component
3. Add new skill object to the `skills` array:
```typescript
{ 
  id: 'newtech', 
  name: 'New Technology', 
  icon: SiNewtech, 
  color: '#FF0000', 
  category: 'frontend' 
}
```

### Adding Work Experience
1. Open `src/data/experience.ts`
2. Add new experience at the top of the `experience` array:
```typescript
{
  id: 'newjob',
  title: 'New Job Title',
  company: 'Company Name',
  location: 'City, Country',
  period: { start: '2025-01', end: '2025-12' },
  description: ['What you did...'],
  tech: ['Skills used'],
  type: 'full-time'
}
```

### Adding New Projects
1. Add project image to `public/` folder
2. Open `src/data/projects.ts`
3. Add new project to the `projects` array:
```typescript
{
  id: 'newproject',
  title: 'Project Name',
  description: 'What it does...',
  thumbnail: '/project-image.jpg',
  tech: ['React', 'Node.js'],
  status: 'completed',
  type: 'personal',
  links: { repo: 'github-url', live: 'demo-url' }
}
```

### Updating Personal Info
- **Name/Title**: Edit `src/components/Hero.tsx` and `src/components/Footer.tsx`
- **About Me**: Edit `src/components/About.tsx`
- **Resume Link**: Update URL in `src/components/Hero.tsx`
- **Social Links**: Update URLs in `src/components/Footer.tsx`

## 🎯 CSS Classes Explained

### Custom Animations
- `.animate-fade-in-up`: Slides up while fading in
- `.animate-fade-in-left`: Slides from left while fading in
- `.animate-fade-in-right`: Slides from right while fading in

### Background Container
- `.background-container`: Critical class for background positioning
- Prevents tilt issues during scrolling
- Isolates animation effects from page layout

### Hover Effects Pattern
Most interactive elements use this pattern:
```css
hover:scale-105        /* Grow slightly on hover */
hover:-translate-y-1   /* Move up slightly */
transition-all duration-300  /* Smooth animation */
```

## 🐛 Troubleshooting Common Issues

### Scrolling Problems
- Check `src/app/globals.css` scroll behavior settings
- Ensure `body` has `overflow-y: auto` and `scroll-behavior: smooth`
- Verify section IDs match navigation button targets

### Background Tilt Issues
- Do NOT add transforms to `.background-container` or its children
- Keep `transform: none` rules in `globals.css`
- Background positioning is controlled via CSS, not JavaScript

### Images Not Loading
- Ensure images are in `public/` folder
- Use cache-busting query parameters (`?v=1`) for updates
- Check file names match exactly in data files

### Animations Not Working
- Verify `useInView` hook is properly imported and used
- Check Framer Motion `initial` and `animate` props
- Ensure elements have proper `ref` attributes

## 🚀 Performance Tips

1. **Images**: Optimize images before adding to `public/` folder
2. **Animations**: Use `triggerOnce: true` in `useInView` for performance
3. **Icons**: Simple Icons library is tree-shaken automatically
4. **Scrolling**: Avoid complex calculations in scroll handlers

## 📱 Browser Support

- **Modern browsers**: Full feature support
- **Safari**: Uses `-webkit-overflow-scrolling: touch` for smooth mobile scrolling
- **Firefox**: Custom scrollbar styles may not apply
- **IE**: Not supported (uses modern JavaScript features)

---

*This documentation was generated to help you understand and maintain your portfolio website. All code includes detailed comments explaining how everything works!*

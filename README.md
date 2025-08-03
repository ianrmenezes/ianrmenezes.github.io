# Ian Menezes - Personal Portfolio

A modern, playful, single-page portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with soft pastel colors and subtle animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful entrance animations and hover effects powered by Framer Motion
- **Interactive Background**: Animated gradient background with moving beams
- **Skills Marquee**: Infinite scrolling skills display with pause on hover
- **Project Showcase**: Filterable project grid with detailed information
- **Experience Timeline**: Vertical timeline showing work experience
- **Performance Optimized**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BeamsBackground.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── SkillsMarquee.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Footer.tsx
├── data/
│   ├── skills.ts
│   ├── projects.ts
│   └── experience.ts
├── hooks/
│   ├── useInView.ts
│   └── useMarqueeSpeed.ts
└── lib/
    └── utils.ts
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ianrmenezes/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Content Updates

All content is stored in the `/src/data/` folder:

- **Skills**: Edit `skills.ts` to add/remove skills and technologies
- **Projects**: Edit `projects.ts` to update your project portfolio
- **Experience**: Edit `experience.ts` to update your work history

### Styling

- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind utility classes

### Background Animation

The animated background can be customized by modifying the `BeamsBackground.tsx` component. You can adjust:
- Beam intensity: `"subtle" | "medium" | "strong"`
- Number of beams
- Colors and animation speed

## 🎨 Design Features

- **Soft Pastel Colors**: Gentle color palette with subtle gradients
- **Glass Morphism**: Backdrop blur effects on cards and components
- **Smooth Transitions**: Hover effects and page transitions
- **Typography**: Clean, modern typography with proper hierarchy
- **Spacing**: Consistent spacing and layout using Tailwind's spacing system

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ian@example.com
- **LinkedIn**: [linkedin.com/in/ianrmenezes](https://linkedin.com/in/ianrmenezes)
- **GitHub**: [github.com/ianrmenezes](https://github.com/ianrmenezes)

---

Built with ❤️ by Ian Menezes

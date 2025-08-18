// ────────────────────────────────────────────────────────────────────────────────
//  ROOT LAYOUT - Main App Structure
// ────────────────────────────────────────────────────────────────────────────────
// This is the root layout for the entire Next.js application
// It wraps all pages and provides the basic HTML structure

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BeamsBackground } from '@/components/BeamsBackground'
import { BackgroundPaths } from '@/components/BackgroundPaths'
import { cn } from '@/lib/utils'

// Load Inter font from Google Fonts for consistent typography
const inter = Inter({ subsets: ['latin'] })

// SEO metadata for the website - appears in search results and social media shares
export const metadata: Metadata = {
  title: 'Ian Menezes - Portfolio',
  description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
  keywords: ['Ian Menezes', 'Portfolio', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Ian Menezes' }],
  creator: 'Ian Menezes',
  // Open Graph tags for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
    type: 'website',
    locale: 'en_US',
  },
  // Twitter card for Twitter sharing
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
  },
}

// Main layout component that wraps every page in the application
export default function RootLayout({
  children, // This will be the page content (Hero, About, Projects, etc.)
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative overflow-x-hidden")}>
        {/* ──────────────────────────────────────────────────────────────── */}
        {/*  BACKGROUND LAYER - Always behind everything */}
        {/* ──────────────────────────────────────────────────────────────── */}
        {/* Fixed position means it stays in place while content scrolls */}
        {/* -z-50 puts it behind all content, pointer-events-none prevents interaction */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden background-container">
          {/* Animated light beams effect */}
          <BeamsBackground className="absolute inset-0" intensity="strong" />
          {/* Animated wave paths effect */}
          <BackgroundPaths className="absolute inset-0" />
        </div>
        
        {/* ──────────────────────────────────────────────────────────────── */}
        {/*  CONTENT LAYER - All page content goes here */}
        {/* ──────────────────────────────────────────────────────────────── */}
        {/* z-10 ensures content is above backgrounds */}
        <div className="relative z-10 w-full">
          {children} {/* This is where Hero, About, Projects, Footer components render */}
        </div>
      </body>
    </html>
  )
} 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BeamsBackground } from '@/components/BeamsBackground'
import { BackgroundPaths } from '@/components/BackgroundPaths'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Menezes - Portfolio',
  description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
  keywords: ['Ian Menezes', 'Portfolio', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Ian Menezes' }],
  creator: 'Ian Menezes',
  openGraph: {
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a full-stack developer passionate about creating innovative web applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative overflow-x-hidden overflow-y-auto")}>
        {/* Content layer - separate from backgrounds */}
        <div className="relative z-10 w-full min-h-screen overflow-visible">
          {children}
        </div>
        
        {/* Background layer - completely isolated */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <BeamsBackground className="absolute inset-0" intensity="strong" />
          <BackgroundPaths className="absolute inset-0" />
        </div>
      </body>
    </html>
  )
} 
import type { Metadata, Viewport } from 'next'
import { Nunito, Zen_Kurenaido, Fredoka } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const zenKurenaido = Zen_Kurenaido({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-zen-kurenaido',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: 'Ian Menezes - Portfolio',
  description: 'Personal portfolio of Ian Menezes, a software developer passionate about creating innovative digital solutions.',
  keywords: ['Ian Menezes', 'Portfolio', 'Software Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Ian Menezes' }],
  creator: 'Ian Menezes',
  openGraph: {
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a software developer passionate about creating innovative digital solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ian Menezes - Portfolio',
    description: 'Personal portfolio of Ian Menezes, a software developer passionate about creating innovative digital solutions.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={cn(nunito.className, zenKurenaido.variable, fredoka.variable, "relative overflow-x-hidden")}>
        {/* Animated pastel blue background */}
        <div className="fixed inset-0 -z-50 overflow-hidden" style={{ background: '#93c5fd' }}>
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Animated gradient blobs */}
          <div className="blob-animate absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-200/55 blur-3xl" style={{ animationDuration: '9s' }} />
          <div className="blob-animate absolute top-[10%] right-[6%] w-72 h-72 rounded-full bg-sky-200/50 blur-3xl" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          <div className="blob-animate absolute top-[40%] left-[6%] w-80 h-80 rounded-full bg-blue-100/65 blur-3xl" style={{ animationDuration: '10s', animationDelay: '4s' }} />
          <div className="blob-animate absolute top-[58%] right-[10%] w-88 h-88 rounded-full bg-blue-200/40 blur-3xl" style={{ animationDuration: '14s', animationDelay: '1s' }} />
          <div className="blob-animate absolute bottom-[15%] left-[25%] w-64 h-64 rounded-full bg-sky-100/55 blur-3xl" style={{ animationDuration: '11s', animationDelay: '3s' }} />
          <div className="blob-animate absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-200/45 blur-3xl" style={{ animationDuration: '8s', animationDelay: '5s' }} />
          <div className="blob-animate absolute top-[72%] left-[4%] w-52 h-52 rounded-full bg-blue-300/25 blur-2xl" style={{ animationDuration: '13s', animationDelay: '2.5s' }} />

          {/* Rising bubbles */}
          <div className="bubble-rise w-5 h-5" style={{ left: '8%',  bottom: '-5%', animationDuration: '14s', animationDelay: '0s'    }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '18%', bottom: '-5%', animationDuration: '18s', animationDelay: '3s'    }} />
          <div className="bubble-rise w-6 h-6" style={{ left: '32%', bottom: '-5%', animationDuration: '12s', animationDelay: '6s'    }} />
          <div className="bubble-rise w-4 h-4" style={{ left: '52%', bottom: '-5%', animationDuration: '16s', animationDelay: '1.5s'  }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '65%', bottom: '-5%', animationDuration: '20s', animationDelay: '4s'    }} />
          <div className="bubble-rise w-5 h-5" style={{ left: '78%', bottom: '-5%', animationDuration: '15s', animationDelay: '7s'    }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '88%', bottom: '-5%', animationDuration: '11s', animationDelay: '2s'    }} />
          <div className="bubble-rise w-4 h-4" style={{ left: '44%', bottom: '-5%', animationDuration: '17s', animationDelay: '9s'    }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '3%',  bottom: '-5%', animationDuration: '13s', animationDelay: '5s'    }} />
          <div className="bubble-rise w-7 h-7" style={{ left: '12%', bottom: '-5%', animationDuration: '22s', animationDelay: '8s'    }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '25%', bottom: '-5%', animationDuration: '19s', animationDelay: '11s'   }} />
          <div className="bubble-rise w-5 h-5" style={{ left: '38%', bottom: '-5%', animationDuration: '10s', animationDelay: '0.5s'  }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '57%', bottom: '-5%', animationDuration: '23s', animationDelay: '13s'   }} />
          <div className="bubble-rise w-4 h-4" style={{ left: '70%', bottom: '-5%', animationDuration: '14s', animationDelay: '10s'   }} />
          <div className="bubble-rise w-6 h-6" style={{ left: '83%', bottom: '-5%', animationDuration: '16s', animationDelay: '4.5s'  }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '93%', bottom: '-5%', animationDuration: '21s', animationDelay: '6.5s'  }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '48%', bottom: '-5%', animationDuration: '18s', animationDelay: '15s'   }} />
          <div className="bubble-rise w-5 h-5" style={{ left: '60%', bottom: '-5%', animationDuration: '11s', animationDelay: '12s'   }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '6%',  bottom: '-5%', animationDuration: '24s', animationDelay: '17s'   }} />
          <div className="bubble-rise w-4 h-4" style={{ left: '22%', bottom: '-5%', animationDuration: '13s', animationDelay: '2.5s'  }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '36%', bottom: '-5%', animationDuration: '20s', animationDelay: '19s'   }} />
          <div className="bubble-rise w-6 h-6" style={{ left: '74%', bottom: '-5%', animationDuration: '15s', animationDelay: '16s'   }} />
          <div className="bubble-rise w-3 h-3" style={{ left: '86%', bottom: '-5%', animationDuration: '17s', animationDelay: '8.5s'  }} />
          <div className="bubble-rise w-5 h-5" style={{ left: '96%', bottom: '-5%', animationDuration: '12s', animationDelay: '14s'   }} />
          <div className="bubble-rise w-2 h-2" style={{ left: '42%', bottom: '-5%', animationDuration: '22s', animationDelay: '20s'   }} />
        </div>

        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  )
}

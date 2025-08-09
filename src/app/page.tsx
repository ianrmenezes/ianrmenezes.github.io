import Hero from '@/components/Hero'
import About from '@/components/About'
import SkillsMarquee from '@/components/SkillsMarquee'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <SkillsMarquee />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
} 
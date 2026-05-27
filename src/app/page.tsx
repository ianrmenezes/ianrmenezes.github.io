import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SkillsMarquee from '@/components/SkillsMarquee'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
} 
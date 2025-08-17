import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ResumeSection from '@/components/sections/ResumeSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import GallerySection from '@/components/sections/GallerySection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResumeSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

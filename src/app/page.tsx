import { HeroSection } from '@/components/hero-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { AchievementsSection } from '@/components/achievements-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
"use client"

import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import EducationSection from "@/components/sections/EducationSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import CertificationsSection from "@/components/sections/CertificationsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Portfolio() {
  return (
    <div className="bg-white text-stone-800 font-sans">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}

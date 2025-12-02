import { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import SocialSidebar from "./SocialSidebar";
import EmailSidebar from "./EmailSidebar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";
import { SECTIONS } from "@/constants";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 100;

          for (const section of SECTIONS) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setCurrentSection(section);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Header onSectionClick={scrollToSection} />
      <Navigation currentSection={currentSection} onSectionClick={scrollToSection} />
      <SocialSidebar />
      <EmailSidebar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <HeroSection onSectionClick={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default Portfolio;
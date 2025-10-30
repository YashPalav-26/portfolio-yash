import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Lottie from "lottie-react";
import heroAnimationData from "../../assets/hero-page-animation.json";
import { Reveal } from "@/components/motion/Reveal";

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

const HERO_TEXTS = [
  "Speedrun coder, RPG quest designer.",
  "Driven by curiosity and coffee.",
  "Cycling enthusiast on a code journey.", 
  "Blendering creativity with code.",
] as const;

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = HERO_TEXTS[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (currentText.length < text.length) {
      timeoutId = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex((prev) => (prev + 1) % HERO_TEXTS.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
          <Reveal>
            <p className="text-primary font-mono text-lg mb-4 tracking-widest uppercase">
              Hello, I'm
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-hero font-black text-foreground mb-4">
              Yash Palav
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-hero-sub font-bold text-gray-500 mb-8 h-12 flex items-center justify-center md:justify-start">
              <span className="typewriter">{currentText}</span>
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="max-w-2xl mx-auto md:mx-0">
              <p className="text-lg leading-relaxed text-foreground/80">
                I’m a web developer who treats every project like a new game level to conquer — blending speed, strategy, and creativity to build experiences that stand out. With a strong foundation in modern web technologies, I love crafting immersive web experiences, often experimenting with 3D models in Blender and integrating them into interactive UIs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-12">
              <button
                onClick={() => onSectionClick("projects")}
                className="neobrutalist-button neobrutalist-button-primary px-8 py-4 text-lg group"
              >
                <span className="relative z-10">View My Work</span>
              </button>
              <button
                onClick={() => onSectionClick("contact")}
                className="neobrutalist-button neobrutalist-button-secondary px-8 py-4 text-lg group"
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>
          </Reveal>
        </div>

          <Reveal delay={0.25}>
            <div className="flex items-center justify-center">
              <Lottie animationData={heroAnimationData} loop={true} className="w-full h-auto max-w-xl" />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-float cursor-pointer" onClick={() => onSectionClick("about")}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Scroll</span>
          <ChevronDown
            size={24}
            className="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
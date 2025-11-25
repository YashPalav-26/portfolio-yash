import { Download, Code2, Bike, Music, Wrench, Lightbulb, Users, Heart, Globe2, Brain } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../assets/coder.json"; 
import { Reveal } from "@/components/animations/Reveal";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const interests = [
    { icon: Brain, label: "Continuous Learning", color: "primary" },
    { icon: Bike, label: "Cycling", color: "secondary" },
    { icon: Music, label: "Music", color: "primary" },
    { icon: Wrench, label: "Crafting", color: "secondary" },
    { icon: Lightbulb, label: "Problem Solving", color: "primary" },
    { icon: Users, label: "Team Leadership", color: "secondary" },
    { icon: Heart, label: "Mentoring", color: "primary" },
    { icon: Globe2, label: "Travelling", color: "secondary" },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-4 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center mb-4">About Me</h2>
          <p className="text-center text-foreground/60 max-w-2xl mx-auto mb-16">
            Crafting digital experiences with passion and precision
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="neobrutalist-card p-8 space-y-4 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary" style={{ transform: 'rotate(45deg)' }} />
                  Who I Am
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  I'm a web developer with a strong foundation in modern technologies, driven by curiosity and a focus on craft. I enjoy turning ideas into reliable, polished experiences and contributing to teams that value quality and impact.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="neobrutalist-card p-8 space-y-4 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary opacity-70" />
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary" style={{ transform: 'rotate(45deg)' }} />
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-foreground font-semibold">Diploma in Information Technology</p>
                  <p className="text-foreground/70">Government Polytechnic Mumbai</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="stat-badge text-xs">
                      91.52% SCORE
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm mt-3 leading-relaxed">
                    Focused on web development, programming, and database management through hands-on, project-based learning.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="neobrutalist-card p-8 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-70" />
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary" style={{ transform: 'rotate(45deg)' }} />
                  Beyond Code
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.label}
                        className="flex items-center gap-3 p-3 bg-background/40 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 group/item"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className={`p-2 bg-${interest.color}/10 border border-${interest.color}/30`}>
                          <Icon size={16} className={`text-${interest.color}`} />
                        </div>
                        <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground">
                          {interest.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                className="resume-button-minimal group relative inline-flex items-center gap-2.5 text-sm overflow-visible"
                to="/resume"
              >
                {/* Geometric corner accents */}
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-background opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-top-left" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-background opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 origin-bottom-right" />
                
                {/* Icon with minimal square background */}
                <span className="relative flex items-center justify-center w-8 h-8 border border-primary-foreground/20 group-hover:border-primary-foreground/30 transition-all duration-300 group-hover:rotate-90">
                  <Download 
                    size={15} 
                    className="text-primary-foreground transition-all duration-300 group-hover:translate-y-0.5" 
                    strokeWidth={2.5}
                  />
                  {/* Subtle inner corner detail */}
                  <span className="absolute top-0 right-0 w-1 h-1 bg-primary-foreground/40 group-hover:bg-background transition-colors duration-300" />
                </span>
                
                {/* Text content */}
                <span className="relative font-semibold tracking-wide text-primary-foreground uppercase text-xs group-hover:tracking-wider transition-all duration-300">
                  View Resume
                </span>
                
                {/* Directional arrow indicator */}
                <span className="relative flex items-center justify-center w-4 h-4">
                  <span className="absolute w-1.5 h-1.5 bg-primary-foreground/50 rotate-45 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-background" />
                  <span className="absolute w-1 h-[2px] bg-primary-foreground/50 -translate-x-0.5 transition-all duration-300 group-hover:w-1.5 group-hover:bg-background" />
                </span>
              </Link>
            </Reveal>
          </div>


          <div className="flex items-center justify-center lg:justify-end">
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-3xl" />
                <div className="relative neobrutalist-card p-6 bg-background/80 backdrop-blur-sm">
                  <Lottie 
                    animationData={animationData} 
                    loop={true} 
                    className="w-full h-auto max-w-lg" 
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
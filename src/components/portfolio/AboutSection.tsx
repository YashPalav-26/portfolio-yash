import {
  Bike,
  Brain,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  Music,
  Users,
  Wrench,
} from "lucide-react";
import Lottie from "lottie-react";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";

import animationData from "../../assets/coder.json";
import { Reveal } from "@/components/animations/Reveal";

const AboutSection = () => {
  const interests = [
    {
      icon: Brain,
      label: "Continuous Learning",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Bike,
      label: "Cycling",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Music,
      label: "Music",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Wrench,
      label: "Crafting",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Lightbulb,
      label: "Problem Solving",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Users,
      label: "Leadership",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Heart,
      label: "Mentoring",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      icon: Globe2,
      label: "Travel",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 inline-flex items-center gap-3">
              About Me
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Crafting digital experiences with passion and precision
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="h-full neobrutalist-card p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 bg-card border border-border flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  Who I Am
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    I'm a{" "}
                    <span className="font-semibold text-foreground">
                      Web Developer
                    </span>{" "}
                    driven by curiosity and a focus on craft. I transform ideas
                    into reliable, polished experiences and contribute to teams
                    that value quality and impact.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Link to="/resume">
                  <button className="px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all hover:gap-3 shadow-sm">
                    <Download className="w-4 h-4" />
                    View Resume
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-1 md:row-span-2">
            <div className="h-full neobrutalist-card p-0 overflow-hidden relative group bg-background/50 border border-border flex flex-col items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
              <div className="w-full h-full p-6 flex items-center justify-center relative z-10 scale-110 group-hover:scale-125 transition-transform duration-700">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="md:col-span-2">
            <div className="h-full neobrutalist-card p-8 relative group hover:-translate-y-1 transition-all duration-300 bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" />
                Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2 relative pl-4 border-l-2 border-secondary/20">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-secondary" />
                  <p className="text-foreground font-semibold">Diploma in IT</p>
                  <p className="text-sm text-foreground/60">
                    Govt. Polytechnic Mumbai
                  </p>
                  <span className="stat-badge text-xs bg-secondary/10 text-secondary border border-secondary/20 px-2 py-1 rounded-md font-bold inline-block mt-2">
                    91.52% Score
                  </span>
                </div>
                <div className="space-y-2 relative pl-4 border-l-2 border-primary/20">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <p className="text-foreground font-semibold">SSC</p>
                  <p className="text-sm text-foreground/60">
                    IES New English School
                  </p>
                  <span className="stat-badge text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-md font-bold inline-block mt-2">
                    87.40% Score
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="md:col-span-3">
            <div className="neobrutalist-card p-6 sm:p-8 bg-card border border-border transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-3">
                  <WiStars size={24} className="text-primary shrink-0" />
                  Beyond Code
                </h3>
                <span className="text-[10px] sm:text-xs text-foreground/40 tracking-wide uppercase">
                  Interests & Values
                </span>
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {interests.map((interest) => {
                  const Icon = interest.icon;

                  return (
                    <div
                      key={interest.label}
                      className="
                        flex items-center gap-3
                        px-3 py-3 sm:px-4
                        rounded-xl
                        border border-border/60
                        bg-background/40
                        transition-all duration-300
                        sm:hover:bg-muted/40
                        sm:hover:shadow-sm
                      "
                    >
                      <div
                        className="
                          p-2 rounded-lg
                          text-foreground/50
                          transition-all duration-300
                          sm:group-hover:text-primary
                          sm:group-hover:scale-105
                          shrink-0
                        "
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        className="
                          text-sm font-medium
                          text-foreground/70
                          leading-tight
                          break-words
                        "
                      >
                        {interest.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

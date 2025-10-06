import { Download } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../assets/breakthrough-idea.json"; 
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-16 px-4">
<div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">About Me</h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-16 items-start mt-16">
          <div className="md:col-span-6 space-y-6">
            <Reveal>
            <div className="relative overflow-hidden space-y-4 text-lg text-foreground/80 leading-relaxed neobrutalist-card p-8 md:p-10 rounded-xl border border-primary/20 shadow-lg">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p>
                I'm a web developer with a strong foundation in modern technologies, driven by curiosity and a focus on craft. I enjoy turning ideas into reliable, polished experiences and contributing to teams that value quality and impact.
              </p>

              <p>
                I earned a Diploma in Information Technology from Government Polytechnic Mumbai (91.52%), focusing on web development, programming, and database management, strengthened by hands-on, project-based learning.
              </p>

              <div className="mt-6">
                <p className="mb-3 text-foreground/90">Outside of work, I enjoy:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Coding</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Cycling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Listening to Music</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Crafting</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Problem Solving</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Team Management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-primary font-medium">Mentoring</span>
                  </div>
                </div>
              </div>
            </div>
            </Reveal>

            <Reveal delay={0.1}>
            <Link
              className="neobrutalist-button px-6 py-3 inline-flex items-center gap-2 mt-8"
              to="/resume"
            >
              <Download size={18} />
              View Resume
            </Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 flex items-center justify-center -mt-24">
            <Reveal delay={0.15}>
              <div className="w-full flex items-center justify-end">
                <Lottie animationData={animationData} loop={true} className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

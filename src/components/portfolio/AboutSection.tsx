import { Download } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../assets/breakthrough-idea.json"; 
import { Reveal } from "@/components/motion/Reveal";

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
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed neobrutalist-card p-8 md:p-10">
              <p>
                An enthusiastic individual with a solid foundation in web development technologies, eager to apply technical skills and innovative project experience within the field of Information Technology. Possesses a strong passion for learning and contributing to projects that support ongoing organizational growth and excellence in web development initiatives.
              </p>

              <p>
                Completed Diploma in Information Technology from Government Polytechnic Mumbai with 91.52% aggregate. Focused on core IT subjects including web development, programming, and database management. Actively engaged in practical projects and hands-on learning experiences.
              </p>

              <div className="mt-6">
                <p className="mb-3 text-foreground/90">Here are a few of the other activities that I love to do:</p>
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
            <button
              className="neobrutalist-button px-6 py-3 flex items-center gap-2 mt-8"
              onClick={() => {
                const href = `${import.meta.env.BASE_URL}resume`;
                window.open(href, '_blank', 'noopener,noreferrer');
              }}
            >
              <Download size={18} />
              View Resume
            </button>
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

import { cn } from "@/lib/utils";
import {
  SiTypescript,
  SiNextdotjs,
  SiBlender,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman
  , SiBun
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/motion/Reveal";

const BRAND_COLORS: Record<string, string> = {
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React.js": "#61DAFB",
  "Redux": "#764ABC",
  "React Router": "#CA4245",
  "Next.js": "#FFFFFF",
  "Three.js": "#FFFFFF",
  "Node.js": "#68A063",
  "Express.js": "#FFFFFF",
  "Tailwind CSS": "#38BDF8",
  "Java": "#F89820",
  "C": "#A8B9CC",
  "C++": "#00599C",
  "Python": "#3776AB",
  "MongoDB": "#47A248",
  "MySQL": "#4479A1",
  "Git": "#F05032",
  "GitHub": "#FFFFFF",
  "Vite": "#646CFF",
  "Bun": "#FFFFFF",
  "Postman": "#FF6C37",
  "Vercel": "#FFFFFF",
  "Blender": "#F5792A",
};

function alpha(hex: string, a: number) {
  const h = hex.replace('#','');
  const isShort = h.length === 3;
  const r = parseInt(isShort ? h[0]+h[0] : h.substring(0,2), 16);
  const g = parseInt(isShort ? h[1]+h[1] : h.substring(2,4), 16);
  const b = parseInt(isShort ? h[2]+h[2] : h.substring(4,6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const skills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Redux", icon: SiRedux },
    { name: "React Router", icon: SiReactrouter },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Three.js", icon: SiThreedotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Java", icon: SiOpenjdk },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vite", icon: SiVite },
    { name: "Bun", icon: SiBun },
    { name: "Postman", icon: SiPostman },
    { name: "Vercel", icon: TbBrandVercel },
    { name: "Blender", icon: SiBlender },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4">
<div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="section-title text-center">My Skills</h2>
        </Reveal>
        <Reveal>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mt-2">
            A collection of technologies and tools I'm proficient in, constantly learning and improving.
          </p>
        </Reveal>
        <Reveal>
          <div className="skills-shell mt-16 p-8 dot-grid">
            <FadeInStagger className="flex flex-wrap justify-center gap-5">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                const color = BRAND_COLORS[skill.name] || 'currentColor';
                return (
                  <FadeInItem
                    key={skill.name}
                    className={cn(
                      "relative p-4 text-center group transform transition-all duration-300 hover:-translate-y-1 bg-background/40 border border-border hover:border-primary/50"
                    )}
                  >
                    <div className="relative mb-2">
                      <div
                        className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2 transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${alpha(color,0.22)}, ${alpha('#000000',0)})`,
                          boxShadow: `0 0 0 1px ${alpha(color,0.45)}`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color }} />
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(120px 60px at 20% 0%, ${alpha(color,0.18)}, transparent 60%)` }} />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </FadeInItem>
                );
              })}
            </FadeInStagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;

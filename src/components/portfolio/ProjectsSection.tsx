import { Github, ExternalLink } from "lucide-react";
import cssProjectImage from "@/assets/ledger.png";
import apexscriptImage from "@/assets/apexscript.png";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/motion/Reveal";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Ledger",
      description: "Ledger is a responsive web application that allows users to create, manage, and organize their notes. It features user authentication, a clean dashboard interface, and a RESTful API for note management operations.",
      image: cssProjectImage,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "JWT"],
      github: "https://github.com/YashPalav-26/Ledger",
      live: "https://ledger-notesmanager.vercel.app/",
    },
    {
      title: "ApexScript Code Editor",
      description: "ApexScript is a sleek, user-friendly code editor using HTML, CSS, React, and Tailwind CSS. Designed for all skill levels, it offers a clean interface and powerful features to enhance your coding experience across multiple languages, ensuring a seamless workflow.",
      image: apexscriptImage,
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
      github: "https://github.com/YashPalav-26/ApexScript-CodeEditor",
      live: "https://yash-apexscript.vercel.app",
    },
  ];

  const otherProjects = [
    {
      title: "Contact Manager Backend",
      description: "Built a RESTful API using Node.js, Express.js, and MongoDB for secure contact management. Utilized JWT authentication for user registration, login, and CRUD operations. Optimized queries with MongoDB and managed code using Git/GitHub.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/YashPalav-26/ContactManagerBackend",
      live: "#",
    },
    {
      title: "Library Management System",
      description: "A Sophisticated Library Management System in Python using Tkinter for GUI. It enables efficient book borrowing, member management, and inventory control with SQLite.",
      technologies: ["Python", "Tkinter", "SQLite"],
      github: "https://github.com/YashPalav-26/Library-Management-System",
      live: "#",
    },
    {
      title: "TodoReact",
      description: "The To-Do App is a task management tool built using React.js and Redux Toolkit. It allows users to add, edit, delete, and mark tasks as completed. Tasks are saved in Local Storage for data persistence.",
      technologies: ["React.js", "Redux Toolkit", "Local Storage"],
      github: "https://github.com/YashPalav-26/TodoReact",
      live: "https://yash-taskmaster.netlify.app",
    },
    {
      title: "TradePro",
      description: "TradePro is a feature-rich, simulated trading platform designed to provide users with a realistic yet risk-free environment to practice trading strategies, monitor market data, and manage virtual portfolios.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/YashPalav-26/TradePro",
      live: "https://yash-tradepro.vercel.app/",
    },
    {
      title: "Climate-Insight",
      description: "ClimateInsight is a sleek, modern weather application designed to provide accurate and up-to-date weather information for any city in the world.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      github: "https://github.com/YashPalav-26/Climate-Insight",
      live: "https://yash-climateinsight.vercel.app/",
    },
    {
      title: "Color-Cascade",
      description: "ColorCascade is a powerful and intuitive tool designed to help you create stunning gradients effortlessly. It offers an easy-to-use interface to generate beautiful, seamless gradients for designers, developers, or anyone interested in colors.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/YashPalav-26/Color-Cascade",
      live: "https://yash-colorcascade.vercel.app",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">My Projects</h2>
        </Reveal>

        <div className="space-y-24 mt-16">
          {featuredProjects.map((project, index) => (
            <Reveal key={index}>
              <div className="grid md:grid-cols-2 gap-8 items-center neobrutalist-card">
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <div className="bg-background/50 p-6">
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/20 text-secondary px-3 py-1 text-sm font-mono rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-transform duration-200 hover:-translate-y-0.5"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-transform duration-200 hover:-translate-y-0.5"
                      aria-label="View live project"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Other Noteworthy Projects</h3>
          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <FadeInItem
                key={index}
                className="neobrutalist-card h-full flex flex-col group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-transform duration-200 hover:-translate-y-0.5"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-transform duration-200 hover:-translate-y-0.5"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;

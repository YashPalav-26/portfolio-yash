import { useState } from "react";
import { cn } from "@/lib/utils";
import talentCornerLogo from "@/assets/talent-corner-logo.png";
import nullclassLogo from "@/assets/nullclass-logo.png";
import { Reveal } from "@/components/motion/Reveal";

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: "Talent Corner HR Services Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      date: "June 2025 – Present",
      description: [
        "Worked on building and enhancing Saarthi360, a comprehensive CRM & HR management system used internally by the company and its franchisees.",
        "Built Saarthi360, a CRM & HR platform with multi-tenant architecture.",
        "Integrated 6+ job portals with payment tracking & analytics.",
        "Designed and optimized a MySQL database (20+ tables) with migrations, constraints, and query optimization.",
        "Implemented 50+ REST API endpoints with JWT authentication, error handling, and role-based access.",
      ],
      image: talentCornerLogo,
    },
    {
      company: "Nullclass EdTech Pvt. Ltd.",
      role: "Frontend Developer Intern",
      date: "Jan 2025 – Jun 2025",
      description: [
        "Developed and enhanced responsive, user-friendly web interfaces for interactive projects.",
        "Implemented dynamic features such as portfolio tracking, sentiment analysis, and trading simulations to improve functionality and user experience.",
        "Designed an Analytics Dashboard with moving averages, RSI, and volatility metrics.",
        "Built a simulated Algorithmic Trading Bot to automate “buy low, sell high” strategies.",
        "Added User Login & Data Persistence with Firebase for secure access and saved preferences."
      ],
      image: nullclassLogo,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Reveal y={12}>
              <ul className="flex md:flex-col neobrutalist-card p-2">
                {experiences.map((exp, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCompany(index)}
                      className={cn(
                        "w-full p-3 text-left text-sm font-mono transition-colors duration-300",
                        selectedCompany === index
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal>
              <div className="neobrutalist-card p-8">
                <div className="flex items-center mb-2">
                  {experiences[selectedCompany] && experiences[selectedCompany].image && (
                    <img
                      src={experiences[selectedCompany].image}
                      alt={experiences[selectedCompany].company}
                      className="h-8 w-8 mr-3 rounded object-contain bg-white/10 p-1"
                    />
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {experiences[selectedCompany] && experiences[selectedCompany].role} @ <span className="text-primary">{experiences[selectedCompany] && experiences[selectedCompany].company}</span>
                  </h3>
                </div>
                <p className="text-sm font-mono text-gray-400 mt-1 mb-6">{experiences[selectedCompany].date}</p>
                <ul className="space-y-3">
                  {experiences[selectedCompany].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0" style={{ transform: 'rotate(45deg)' }}></div>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Reveal } from "@/components/motion/Reveal";
import { SOCIAL_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
      <div className="bg-background/95 backdrop-blur border-t-2 border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <Logo size="lg" />
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center gap-4 mb-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-foreground/80 hover:text-primary",
                    "transition-all duration-300 rounded-md p-2 ring-1 ring-border hover:ring-primary/50 hover:-translate-y-0.5",
                  )}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="text-sm text-gray-400">
              <p>Designed & Built by Yash Palav</p>
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              <p className="mt-4">
                Built with <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Tailwind CSS</span>, and{" "}
                <span className="text-primary">Vite</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

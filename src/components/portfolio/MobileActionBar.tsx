import { Github, Linkedin, Instagram, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const MobileActionBar = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/YashPalav-26", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yashpalav/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_highkeyyash_/", label: "Instagram" },
  ];

  const resumeHref = "/resume";
  const mailHref = "mailto:yashpalav48@gmail.com";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50">
      <div className="mx-4 mb-4 rounded-md border-2 border-border bg-background/90 backdrop-blur portfolio-glow">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "text-foreground/80 hover:text-primary",
                  "transition-all duration-200 p-2 ring-1 ring-border rounded-md"
                )}
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href={mailHref}
              aria-label="Email"
              className={cn(
                "text-foreground/80 hover:text-primary",
                "transition-all duration-200 p-2 ring-1 ring-border rounded-md"
              )}
            >
              <Mail size={20} />
            </a>
          </div>
          <Link
            to={resumeHref}
            className="neobrutalist-button px-3 py-2 text-xs leading-none inline-flex items-center gap-1"
          >
            <FileText size={16} />
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;

import { Github, Linkedin,  Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/YashPalav-26", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yashpalav/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_highkeyyash_/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-foreground hover:text-primary",
              "transition-colors duration-300 hover:-translate-y-1"
            )}
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
        <div className="w-px h-32 bg-border" />
      </div>
    </div>
  );
};

export default SocialSidebar;
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/constants";

const SocialSidebar = () => {

  return (
    <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
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
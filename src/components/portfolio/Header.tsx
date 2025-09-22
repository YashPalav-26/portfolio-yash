import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

const Header = ({ onSectionClick }: HeaderProps) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-background">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-fade-in">
            <Logo size="md" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={cn(
                  "text-foreground hover:text-primary",
                  "transition-colors duration-300 relative group"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
>
              <Link to="/resume">Resume</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
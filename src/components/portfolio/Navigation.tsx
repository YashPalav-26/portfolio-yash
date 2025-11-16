import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionClick }: NavigationProps) => {
  const navItems = [
    { id: "hero", label: "" },
    { id: "about", label: "" },
    { id: "skills", label: "" },
    { id: "experience", label: "" },
    { id: "projects", label: "" },
    { id: "contact", label: "" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionClick(item.id)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSection === item.id ? "bg-primary scale-125" : "bg-border hover:bg-primary"
            )}
            aria-label={`Go to ${item.id} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
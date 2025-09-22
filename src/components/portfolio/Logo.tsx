import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-primary"
        />
        <path
          d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
          fill="currentColor"
          fillOpacity="0.1"
          className="text-primary"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">Y</span>
      </div>
    </div>
  );
};

export default Logo;
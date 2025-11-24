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
        viewBox="0 0 200 150"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Wing outlines */}
        <path
          d="M20 20 L90 70 L100 95 L60 70 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="round"
          className="text-foreground"
        />
        <path
          d="M180 20 L110 70 L100 95 L140 70 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinejoin="round"
          className="text-foreground"
        />

        {/* Center diamond */}
        <polygon
          points="100,95 115,110 100,125 85,110"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
          className="text-primary"
        />
      </svg>
    </div>
  );
};

export default Logo;
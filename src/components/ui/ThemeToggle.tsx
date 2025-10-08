import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-border bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors duration-300"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 90,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -90,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-secondary drop-shadow-[0_0_8px_hsl(var(--secondary)/0.5)]" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./portfolio/Logo";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        const increment = prev < 60 ? Math.random() * 15 + 10 : Math.random() * 5 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      >
        <div className="relative flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Logo size="lg" className="w-32 h-32 md:w-40 md:h-40" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 -m-4 rounded-full border-3 border-primary/40 blur-sm"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-3 border-primary/30"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 10%, 0 90%, 100% 90%, 100% 100%, 0 100%)" }}
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border-2 border-secondary/20"
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-2"
          >
            <p className="text-xl font-mono text-foreground/80 tracking-wider">
              LOADING PORTFOLIO
            </p>
            <div className="flex items-center gap-2 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-primary"
                  style={{ transform: "rotate(45deg)" }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-64 md:w-96"
          >
            <div className="relative h-3 bg-background border-3 border-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full relative"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                }}
              >
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-1/3"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  }}
                />
              </motion.div>


              <div className="absolute -bottom-1 -right-1 w-full h-full border-3 border-border -z-10" />
            </div>


            <motion.div
              className="mt-3 text-center"
              key={Math.floor(progress)}
            >
              <span className="text-2xl font-black font-mono text-primary">
                {Math.floor(progress)}%
              </span>
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {["</>", "{}", "[]", "( )", "=>", "&&"].map((symbol, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: `${Math.random() * 100}%`,
                  y: "100%",
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  y: ["-20%", "-120%"],
                  x: `${Math.random() * 100}%`,
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute text-4xl font-mono font-bold text-primary/20"
              >
                {symbol}
              </motion.div>
            ))}
          </div>

          <div className="fixed top-8 left-8">
            <motion.div
              animate={{ rotate: [0, 90, 90, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="w-16 h-16 border-4 border-primary"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%)" }}
            />
          </div>

          <div className="fixed bottom-8 right-8">
            <motion.div
              animate={{ rotate: [0, -90, -90, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="w-16 h-16 border-4 border-secondary"
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%)" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

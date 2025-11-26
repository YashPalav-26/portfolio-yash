import { useState, useEffect } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { SOCIAL_LINKS, EMAIL } from "@/constants";
import { Heart, Copy, Check, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-32 overflow-hidden bg-background pt-20 pb-10">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">


          <div className="lg:col-span-8 flex flex-col justify-between space-y-12">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                  Have an idea?
                  <br />
                  <span className="text-muted-foreground/50">Let's build it.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative inline-flex items-center gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="text-2xl md:text-4xl font-medium text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-4"
                >
                  {EMAIL}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Copy className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>


          <div className="lg:col-span-4 flex flex-col justify-end space-y-10">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="font-medium text-foreground/80 group-hover:text-foreground">{label}</span>
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>


        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Mumbai, India</span>
              <span className="text-border">|</span>
              <span className="font-mono">{time} IST</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Yash Palav
            </p>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">

          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>


          <Reveal>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 border-2 border-primary/30 rounded-full mb-8">
                <Search size={48} className="text-primary" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-hero font-black text-foreground mb-6">
              404
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void.
              Don't worry, even the best explorers get lost sometimes.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="neobrutalist-button neobrutalist-button-primary px-8 py-4 text-lg group flex items-center gap-2"
              >
                <Home size={20} />
                <span className="relative z-10">Back to Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="neobrutalist-button neobrutalist-button-secondary px-8 py-4 text-lg group flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                <span className="relative z-10">Go Back</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="text-sm text-foreground/60 font-mono tracking-wider uppercase">
                Lost? Try navigating through the main sections
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {["about", "skills", "experience", "projects", "contact"].map((section, index) => (
                  <Reveal key={section} delay={0.35 + index * 0.05}>
                    <Link
                      to={`/#${section}`}
                      className="text-primary hover:text-secondary transition-colors duration-300 font-medium capitalize"
                    >
                      {section}
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
      </div>
      <div className="absolute top-1/3 right-12 hidden lg:block">
        <div className="w-1 h-1 bg-secondary/40 rounded-full animate-float delay-1000"></div>
      </div>
      <div className="absolute bottom-1/4 left-12 hidden lg:block">
        <div className="w-3 h-3 bg-primary/20 rounded-full animate-float delay-500"></div>
      </div>
    </section>
  );
};

export default NotFound;

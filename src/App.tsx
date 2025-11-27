import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import CursorAura from "@/components/effects/CursorAura";
import ClickSpark from "@/components/animations/ClickSpark";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingScreen from "@/components/LoadingScreen";
import { useTheme } from "@/contexts/ThemeContext";
import SmoothScroll from "@/components/effects/SmoothScroll";

const queryClient = new QueryClient();

const App = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds minimum

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isLoading && <LoadingScreen />}
          <Toaster />
          <Sonner />
          <CursorAura />
          <ClickSpark sparkColor={theme === 'dark' ? '#fff' : '#000'} sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <SmoothScroll>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SmoothScroll>
            </BrowserRouter>
          </ClickSpark>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;

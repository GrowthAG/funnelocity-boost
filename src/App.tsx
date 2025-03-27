
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Redirect component for external links
const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          
          {/* External redirects */}
          <Route path="/login" element={<ExternalRedirect to="https://app.growthfunnels.com.br/" />} />
          <Route path="/demo" element={<ExternalRedirect to="https://api.leadconnectorhq.com/widget/booking/MPETKLENngnBUUDATVAd" />} />
          <Route path="/trial" element={<ExternalRedirect to="https://app.growthfunnels.com.br/trial" />} />
          <Route path="/afiliados" element={<ExternalRedirect to="https://growthfunnels.com.br/afiliados" />} />
          
          {/* These routes will redirect to home for now as placeholders */}
          <Route path="/case-studies" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          
          {/* Catch all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

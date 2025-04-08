
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
import BlogPost from "./components/BlogPost";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Affiliates from "./pages/Affiliates";
import Schedule from "./pages/Schedule";

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
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/afiliados" element={<Affiliates />} />
          <Route path="/schedule" element={<Schedule />} />
          
          {/* External redirects */}
          <Route path="/login" element={<ExternalRedirect to="https://app.growthfunnels.com.br/" />} />
          <Route path="/demo" element={<Navigate to="/schedule" replace />} />
          <Route path="/pro" element={<ExternalRedirect to="https://checkout.growthfunnels.com.br/pro" />} />
          <Route path="/plus" element={<ExternalRedirect to="https://checkout.growthfunnels.com.br/plus" />} />
          
          {/* Catch all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

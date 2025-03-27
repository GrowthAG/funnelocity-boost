
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* These routes will redirect to home for now as placeholders */}
          <Route path="/features" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/cases" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/login" element={<Index />} />
          <Route path="/demo" element={<Index />} />
          <Route path="/trial" element={<Index />} />
          
          {/* Catch all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

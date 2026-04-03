import { Toaster } from "@/components/ui/toaster";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Itineraries from "./pages/Itineraries"
import ItineraryDetail from "./pages/ItineraryDetail";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tips from "./pages/Tips";
import TipDetail from "./pages/TipDetail";
import ReelsPage from "./pages/Reels"; // Renamed to avoid conflict with component name
import LinksPage from "./pages/Links";
import MediaKitPage from "./pages/MediaKit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <ToasterSonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itineraries/:slug" element={<ItineraryDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tips/:slug" element={<TipDetail />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/media-kit" element={<MediaKitPage />} />
          <Route path="/links" element={<LinksPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SwissAlps from "./pages/destinations/SwissAlps";
import NewZealand from "./pages/destinations/NewZealand";
import NorwegianFjords from "./pages/destinations/NorwegianFjords";
import Transylvania100 from "./pages/destinations/Transylvania100";
import MontBlanc from "./pages/destinations/MontBlanc";
import BlackForest from "./pages/destinations/BlackForest";
import Mallorca from "./pages/destinations/Mallorca";
import ChiantiUltraTrail from "./pages/destinations/ChiantiUltraTrail";
import Vesuvio from "./pages/destinations/Vesuvio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations/gtc" element={<SwissAlps />} />
          <Route path="/destinations/miut" element={<NewZealand />} />
          <Route path="/destinations/vesuvio" element={<Vesuvio />} />
          <Route path="/destinations/norwegian-fjords" element={<NorwegianFjords />} />
          <Route path="/destinations/transylvania" element={<Transylvania100 />} />
          <Route path="/destinations/mont-blanc" element={<MontBlanc />} />
          <Route path="/destinations/mallorca" element={<Mallorca />} />
          <Route path="/destinations/black-forest" element={<BlackForest />} />
          <Route path="/destinations/chianti" element={<ChiantiUltraTrail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SwissAlps from "./pages/destinations/SwissAlps";
import MIUT from "./pages/destinations/MIUT";
import NorwegianFjords from "./pages/destinations/NorwegianFjords";
import Transylvania100 from "./pages/destinations/Transylvania100";
import MontBlanc from "./pages/destinations/MontBlanc";
import BlackForest from "./pages/destinations/BlackForest";
import Vesuvio from "./pages/destinations/Vesuvio";
import RibeiraSacra from "./pages/destinations/RibeiraSacra";
import Dolomites from "./pages/destinations/Dolomites";
import ChiantiTrail from "./pages/destinations/ChiantiTrail";
import ZugspitzUltratrail from "./pages/destinations/ZugspitzUltratrail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations/gtc" element={<SwissAlps />} />
          <Route path="/destinations/miut" element={<MIUT />} />
          <Route path="/destinations/vesuvio" element={<Vesuvio />} />
          <Route path="/destinations/norwegian-fjords" element={<NorwegianFjords />} />
          <Route path="/destinations/transylvania" element={<Transylvania100 />} />
          <Route path="/destinations/mont-blanc" element={<MontBlanc />} />
          <Route path="/destinations/black-forest" element={<BlackForest />} />
          <Route path="/destinations/ribeira-sacra" element={<RibeiraSacra />} />
          <Route path="/destinations/dolomites" element={<Dolomites />} />
          <Route path="/destinations/chianti" element={<ChiantiTrail />} />
          <Route path="/destinations/zugspitz" element={<ZugspitzUltratrail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

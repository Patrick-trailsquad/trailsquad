import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import ForOrganizers from "./pages/ForOrganizers";
import Flash from "./pages/Flash";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
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
import Istria100 from "./pages/destinations/Istria100";
import InfiniteTrails from "./pages/destinations/InfiniteTrails";
import TrailFox from "./pages/TrailFox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/for-organizers" element={<ForOrganizers />} />
            <Route path="/flash" element={<Flash />} />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Destination routes */}
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
          <Route path="/destinations/istria" element={<Istria100 />} />
          <Route path="/destinations/infinite-trails" element={<InfiniteTrails />} />
          <Route path="/trailfox" element={<TrailFox />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

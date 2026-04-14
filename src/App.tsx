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
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import RibeiraSacra from "./pages/destinations/RibeiraSacra";
import RibeiraSacra2026 from "./pages/destinations/RibeiraSacra2026";
import Transylvania100 from "./pages/destinations/Transylvania100";
import InfiniteTrails from "./pages/destinations/InfiniteTrails";
import SwissAlps100 from "./pages/destinations/SwissAlps100";
import LaBoucleDeLEtoile from "./pages/destinations/LaBoucleDeLEtoile";
import KangNu26 from "./pages/destinations/KangNu26";
import SwissAlps100V2 from "./pages/destinations/SwissAlps100V2";
import KangNu26V2 from "./pages/destinations/KangNu26V2";
import TrailFox from "./pages/TrailFox";
import SquadTraining from "./pages/SquadTraining";

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
            <Route path="/training" element={<Training />} />
            
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
            <Route path="/destinations/ribeira-sacra" element={<RibeiraSacra />} />
            <Route path="/destinations/ribeira-sacra-2026" element={<RibeiraSacra2026 />} />
            <Route path="/destinations/transylvania" element={<Transylvania100 />} />
            <Route path="/destinations/infinite-trails" element={<InfiniteTrails />} />
            <Route path="/destinations/swiss-alps-100" element={<SwissAlps100V2 />} />
            <Route path="/destinations/la-boucle-de-l-etoile" element={<LaBoucleDeLEtoile />} />
            <Route path="/destinations/kangnu26" element={<KangNu26V2 />} />
            <Route path="/swiss-alps-100_2" element={<SwissAlps100 />} />
            <Route path="/kangnu_2" element={<KangNu26 />} />
            <Route path="/trailfox" element={<TrailFox />} />
            <Route path="/squadtraining" element={<SquadTraining />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

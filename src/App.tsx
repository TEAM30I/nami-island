import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Yoga from "./pages/Yoga";
import Ayurveda from "./pages/Ayurveda";
import ArtTherapy from "./pages/ArtTherapy";
import SoundTherapy from "./pages/SoundTherapy";
import DrumCircle from "./pages/DrumCircle";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* BrowserRouter 내부 최상단에 위치 */}
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/yoga" element={<Yoga />} />
              <Route path="/ayurveda" element={<Ayurveda />} />
              <Route path="/art-therapy" element={<ArtTherapy />} />
              <Route path="/sound-therapy" element={<SoundTherapy />} />
              <Route path="/drum-circle" element={<DrumCircle />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

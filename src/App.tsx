import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const Yoga = lazy(() => import("./pages/Yoga"));
const Ayurveda = lazy(() => import("./pages/Ayurveda"));
const ArtTherapy = lazy(() => import("./pages/ArtTherapy"));
const SoundTherapy = lazy(() => import("./pages/SoundTherapy"));
const DrumCircle = lazy(() => import("./pages/DrumCircle"));
const Reservation = lazy(() => import("./pages/Reservation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Suspense fallback={<div className="flex justify-center items-center h-screen"><p>Loading...</p></div>}>
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
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

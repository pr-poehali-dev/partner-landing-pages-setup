
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DevelopersWithRepair from "./pages/DevelopersWithRepair";
import DevelopersWithoutRepair from "./pages/DevelopersWithoutRepair";
import Agencies from "./pages/Agencies";
import Suppliers from "./pages/Suppliers";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/developers-with-repair" element={<DevelopersWithRepair />} />
          <Route path="/developers-without-repair" element={<DevelopersWithoutRepair />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
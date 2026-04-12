import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import PersonalData from "./pages/PersonalData";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 1. Авто-редирект: если зашли на site.com, кидаем на site.com/ru */}
          <Route path="/" element={<Navigate to="/ru" replace />} />

          {/* 2. Группа с языком: все страницы внутри будут иметь префикс /:lng */}
          <Route path="/:lng">
            <Route index element={<Index />} />
            <Route path="blog" element={<Blog />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="personal-data" element={<PersonalData />} />
          </Route>

          {/* 3. Ошибка 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
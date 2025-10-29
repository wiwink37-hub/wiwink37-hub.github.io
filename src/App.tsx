import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import SportsPage from "./pages/SportsPage";
import SalePage from "./pages/SalePage";
import BrandsPage from "./pages/BrandsPage";
import ContactPage from "./pages/ContactPage";
import ShippingPage from "./pages/ShippingPage";
import SizeGuidePage from "./pages/SizeGuidePage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import StoresPage from "./pages/StoresPage";
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
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/men" element={<CategoryPage />} />
          <Route path="/women" element={<CategoryPage />} />
          <Route path="/kids" element={<CategoryPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SportsPage = () => {
  const sports = ["Running", "Soccer", "Basketball", "Training", "Outdoor"];
  const [selectedSport, setSelectedSport] = useState("All");

  const filteredProducts = selectedSport === "All"
    ? products.filter(p => p.sport)
    : products.filter(p => p.sport === selectedSport);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-80 bg-secondary flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80"
              alt="Sports"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4">SPORTS</h1>
            <p className="text-xl">Performance gear for every athlete</p>
          </div>
        </section>

        {/* Sport Categories */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={selectedSport === "All" ? "default" : "outline"}
              onClick={() => setSelectedSport("All")}
              className="font-bold"
            >
              ALL SPORTS
            </Button>
            {sports.map((sport) => (
              <Button
                key={sport}
                variant={selectedSport === sport ? "default" : "outline"}
                onClick={() => setSelectedSport(sport)}
                className="font-bold"
              >
                {sport.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">
              [{filteredProducts.length}] Products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SportsPage;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-secondary flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556906781-9cba4a63dffc?w=1600&q=80"
              alt="Hero"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              IMPOSSIBLE IS NOTHING
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover the latest collection of performance footwear and apparel
            </p>
            <Link to="/products">
              <Button size="lg" className="font-bold text-base px-8">
                SHOP NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black">NEW ARRIVALS</h2>
            <Link to="/products">
              <Button variant="ghost" className="font-bold">
                VIEW ALL
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-black mb-8">SHOP BY CATEGORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/men" className="group relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&q=80"
                alt="Men"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-3xl font-black">MEN</h3>
              </div>
            </Link>
            <Link to="/women" className="group relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
                alt="Women"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-3xl font-black">WOMEN</h3>
              </div>
            </Link>
            <Link to="/kids" className="group relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80"
                alt="Kids"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-3xl font-black">KIDS</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-bold text-lg mb-2">FREE SHIPPING</h3>
                <p className="text-muted-foreground">On orders over $100</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">FREE RETURNS</h3>
                <p className="text-muted-foreground">30-day return policy</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">MEMBER BENEFITS</h3>
                <p className="text-muted-foreground">Join for exclusive offers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

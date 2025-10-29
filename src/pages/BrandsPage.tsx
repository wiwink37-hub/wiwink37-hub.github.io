import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BrandsPage = () => {
  const brands = [
    { name: "Hekla Originals", image: "https://images.unsplash.com/photo-1556906781-9cba4a63dffc?w=800&q=80" },
    { name: "Hekla Performance", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
    { name: "Y-3", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80" },
    { name: "Hekla Terrex", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-4">BRANDS</h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of iconic brands
            </p>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to="/products"
                className="group relative h-96 overflow-hidden bg-secondary"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-4xl font-black">{brand.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandsPage;

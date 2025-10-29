import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams();
  
  const categoryProducts = products.filter(
    product => product.gender === category
  );

  const categoryTitle = category?.toUpperCase() || "PRODUCTS";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-64 bg-secondary flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={
                category === "men"
                  ? "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=1600&q=80"
                  : category === "women"
                  ? "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&q=80"
                  : "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1600&q=80"
              }
              alt={categoryTitle}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <h1 className="relative z-10 text-5xl md:text-6xl font-black text-white">
            {categoryTitle}
          </h1>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <p className="text-muted-foreground">
              [{categoryProducts.length}] Products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const SalePage = () => {
  // Simulate sale products (first 6 products with 20% discount)
  const saleProducts = products.slice(0, 6).map(product => ({
    ...product,
    price: Math.round(product.price * 0.8)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-96 bg-destructive text-destructive-foreground flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive to-destructive/80" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-black mb-6">SALE</h1>
            <p className="text-2xl md:text-3xl font-bold mb-4">
              UP TO 20% OFF
            </p>
            <p className="text-lg">Limited time offer on selected items</p>
          </div>
        </section>

        {/* Sale Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <p className="text-muted-foreground">
              [{saleProducts.length}] Sale Items
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalePage;

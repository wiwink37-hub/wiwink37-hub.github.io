import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8">SHIPPING & RETURNS</h1>
          
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Free Standard Shipping</strong> on orders over $100</p>
                <p>Standard Shipping (3-5 business days): $5.99</p>
                <p>Express Shipping (1-2 business days): $14.99</p>
                <p>Orders are processed within 24 hours on business days.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Returns Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We accept returns within 30 days of purchase for unworn items with original tags.</p>
                <p><strong>Free Returns</strong> - We provide a prepaid return label with every order.</p>
                <p>Refunds are processed within 5-7 business days after we receive your return.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How to Return</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Log in to your account and select the order</li>
                <li>Choose the items you want to return</li>
                <li>Print the prepaid return label</li>
                <li>Pack your items securely</li>
                <li>Drop off at any authorized shipping location</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Exchange Policy</h2>
              <p className="text-muted-foreground">
                Need a different size or color? We make exchanges easy! Follow the same return process 
                and place a new order for your preferred item.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPage;

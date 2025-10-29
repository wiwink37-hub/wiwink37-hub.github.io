import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-96 bg-primary text-primary-foreground flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4">ABOUT HEKLA</h1>
            <p className="text-xl md:text-2xl">Impossible Is Nothing</p>
          </div>
        </section>

        {/* Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-4">OUR STORY</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for sports and innovation, Hekla has been at the forefront 
                of athletic performance for decades. We believe that through sport, we have the power 
                to change lives and create a better world.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-4">OUR MISSION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the best sports brand in the world. We design and create products that help 
                athletes of all levels achieve their goals, from professional athletes to weekend warriors. 
                Our commitment to quality, innovation, and sustainability drives everything we do.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-4">INNOVATION</h2>
              <p className="text-muted-foreground leading-relaxed">
                Innovation is in our DNA. From groundbreaking footwear technology to sustainable 
                manufacturing processes, we're constantly pushing the boundaries of what's possible. 
                Our labs work tirelessly to create products that enhance performance while reducing 
                environmental impact.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-4">SUSTAINABILITY</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to creating a sustainable future. By 2025, we aim to use only recycled 
                polyester in all our products. We're investing in renewable energy, reducing waste, and 
                working with partners who share our commitment to protecting the planet.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-12 text-center">OUR VALUES</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">PERFORMANCE</h3>
                <p className="text-muted-foreground">
                  We're obsessed with helping athletes perform at their best
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">PASSION</h3>
                <p className="text-muted-foreground">
                  We love what we do and it shows in every product we create
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">INTEGRITY</h3>
                <p className="text-muted-foreground">
                  We do what's right, even when no one is watching
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

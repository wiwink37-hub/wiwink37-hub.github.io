import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const StoresPage = () => {
  const stores = [
    {
      name: "Hekla NYC Flagship",
      address: "560 Broadway, New York, NY 10012",
      phone: "(212) 555-0123",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-7pm"
    },
    {
      name: "Hekla Los Angeles",
      address: "8500 Beverly Blvd, Los Angeles, CA 90048",
      phone: "(310) 555-0456",
      hours: "Mon-Sat: 10am-9pm, Sun: 11am-7pm"
    },
    {
      name: "Hekla Chicago",
      address: "835 N Michigan Ave, Chicago, IL 60611",
      phone: "(312) 555-0789",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm"
    },
    {
      name: "Hekla Miami",
      address: "701 S Miami Ave, Miami, FL 33130",
      phone: "(305) 555-0321",
      hours: "Mon-Sat: 10am-9pm, Sun: 12pm-7pm"
    },
    {
      name: "Hekla San Francisco",
      address: "865 Market St, San Francisco, CA 94103",
      phone: "(415) 555-0654",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm"
    },
    {
      name: "Hekla Boston",
      address: "800 Boylston St, Boston, MA 02199",
      phone: "(617) 555-0987",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8">STORE LOCATOR</h1>
          
          {/* Search */}
          <div className="max-w-2xl mb-12">
            <p className="text-muted-foreground mb-4">
              Find a Hekla store near you
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter city, state, or zip code" 
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </div>

          {/* Store List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <div key={index} className="border p-6 space-y-4">
                <h3 className="text-xl font-bold">{store.name}</h3>
                
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{store.address}</p>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <p className="text-muted-foreground">{store.phone}</p>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{store.hours}</p>
                </div>

                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoresPage;

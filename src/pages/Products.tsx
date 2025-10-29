import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommended");

  const genders = ["men", "women", "kids", "unisex"];
  const sports = ["Running", "Soccer", "Basketball", "Training", "Outdoor"];

  const toggleFilter = (value: string, array: string[], setter: (arr: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(item => item !== value));
    } else {
      setter([...array, value]);
    }
  };

  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(product.gender);
    const sportMatch = selectedSports.length === 0 || (product.sport && selectedSports.includes(product.sport));
    return priceMatch && genderMatch && sportMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-az":
        return a.name.localeCompare(b.name);
      case "name-za":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-4">PRICE</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={400}
          step={10}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">GENDER</h3>
        <div className="space-y-3">
          {genders.map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox
                id={gender}
                checked={selectedGenders.includes(gender)}
                onCheckedChange={() => toggleFilter(gender, selectedGenders, setSelectedGenders)}
              />
              <label htmlFor={gender} className="text-sm capitalize cursor-pointer">
                {gender}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">SPORT</h3>
        <div className="space-y-3">
          {sports.map((sport) => (
            <div key={sport} className="flex items-center space-x-2">
              <Checkbox
                id={sport}
                checked={selectedSports.includes(sport)}
                onCheckedChange={() => toggleFilter(sport, selectedSports, setSelectedSports)}
              />
              <label htmlFor={sport} className="text-sm cursor-pointer">
                {sport}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-black mb-2">ALL PRODUCTS</h1>
          <p className="text-muted-foreground">[{sortedProducts.length}]</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full mb-4">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  FILTERS
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-8">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} products
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-az">Name: A to Z</SelectItem>
                  <SelectItem value="name-za">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

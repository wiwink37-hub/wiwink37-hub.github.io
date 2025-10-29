export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  gender: "men" | "women" | "kids" | "unisex";
  sport?: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Supernova Rise 2 Running Shoes",
    category: "Women's Running",
    price: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    isNew: true,
    gender: "women",
    sport: "Running",
    colors: ["White/Blue", "Black", "Pink"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    description: "Experience ultimate comfort with advanced cushioning technology designed for long-distance running."
  },
  {
    id: "2",
    name: "Adizero Aduku Running Shoes",
    category: "Unisex Originals",
    price: 210,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    gender: "unisex",
    sport: "Running",
    colors: ["Black/Silver", "White"],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Lightweight performance shoes built for speed with responsive cushioning."
  },
  {
    id: "3",
    name: "Samba Classic Shoes",
    category: "Unisex Originals",
    price: 270,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    isNew: false,
    gender: "unisex",
    colors: ["Black", "White/Navy", "Green"],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Iconic football-inspired shoes with a leather upper and suede overlays."
  },
  {
    id: "4",
    name: "Disney Tiana Kids Running Shoes",
    category: "Kids Sportswear",
    price: 70,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80",
    gender: "kids",
    sport: "Training",
    colors: ["Yellow/Green", "Purple"],
    sizes: ["28", "29", "30", "31", "32", "33", "34", "35"],
    description: "Fun and colorful shoes for active kids with comfortable fit."
  },
  {
    id: "5",
    name: "Ultraboost Light Running Shoes",
    category: "Men's Running",
    price: 280,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    isNew: true,
    gender: "men",
    sport: "Running",
    colors: ["White", "Black", "Grey"],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    description: "Our lightest Ultraboost yet with incredible energy return."
  },
  {
    id: "6",
    name: "Gazelle Indoor Shoes",
    category: "Unisex Originals",
    price: 150,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    gender: "unisex",
    colors: ["Beige/Brown", "Navy", "Green"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Retro-inspired suede shoes with a vintage aesthetic."
  },
  {
    id: "7",
    name: "Stan Smith Classic Shoes",
    category: "Unisex Originals",
    price: 120,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    gender: "unisex",
    colors: ["White/Green", "White/Navy", "All White"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Timeless tennis-inspired shoes with clean leather upper."
  },
  {
    id: "8",
    name: "Adilette Comfort Slides",
    category: "Unisex Sportswear",
    price: 45,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80",
    gender: "unisex",
    colors: ["Black", "Navy", "White"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Comfortable slides with contoured footbed for everyday wear."
  },
  {
    id: "9",
    name: "Terrex Free Hiker Shoes",
    category: "Men's Outdoor",
    price: 320,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    isNew: true,
    gender: "men",
    sport: "Outdoor",
    colors: ["Grey/Orange", "Black"],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    description: "High-performance hiking shoes with superior traction and support."
  },
  {
    id: "10",
    name: "Predator Edge FG Soccer Cleats",
    category: "Men's Soccer",
    price: 290,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
    isNew: true,
    gender: "men",
    sport: "Soccer",
    colors: ["Black/Red", "White/Blue"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Elite soccer cleats with enhanced ball control and precision."
  },
  {
    id: "11",
    name: "Forum Low Classic Shoes",
    category: "Unisex Originals",
    price: 140,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    gender: "unisex",
    colors: ["White/Blue", "Black/Gold"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Basketball-inspired lifestyle shoes with iconic ankle strap."
  },
  {
    id: "12",
    name: "NMD_R1 Shoes",
    category: "Unisex Originals",
    price: 190,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
    isNew: true,
    gender: "unisex",
    colors: ["Core Black", "White/Blue", "Grey"],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    description: "Modern street-ready shoes with Boost cushioning technology."
  }
];

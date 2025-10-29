import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, category, price, image, isNew }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-none shadow-none hover:shadow-md transition-shadow">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-bold">
              NEW
            </div>
          )}
        </div>
      </Link>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 bg-background/80 hover:bg-background"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart
          className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
        />
      </Button>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <p className="text-xs text-muted-foreground uppercase mb-1">{category}</p>
          <h3 className="font-bold mb-2 hover:opacity-70 transition-opacity">
            {name}
          </h3>
          <p className="font-bold">${price.toFixed(2)}</p>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Product } from "types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <a
      href="/"
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative  dark:bg-background rounded-lg">
            <img
              src={data.images?.[0]}
              alt=""
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <p className="font-semibold text-lg">{data.name}</p>
          <p className="text-sm text-primary/80">{data.category}</p>
          <p>{data?.price}</p>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProductCard;

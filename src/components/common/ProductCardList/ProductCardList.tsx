import { ProductCard } from "../ProductCard";
import { ProductCardListProps } from "./ProductCardList.types";

export function ProductCardList({ title, products }: ProductCardListProps) {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

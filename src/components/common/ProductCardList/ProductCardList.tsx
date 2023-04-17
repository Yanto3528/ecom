import { ProductCard } from "../ProductCard";
import { ProductCardListProps } from "./ProductCardList.types";

export function ProductCardList({ title, products }: ProductCardListProps) {
  return (
    <div>
      {title && <h2 className="font-bold text-2xl mb-4">{title}</h2>}
      <ul className="grid grid-cols-4 gap-x-4 gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

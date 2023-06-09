import ProductCard from '../ProductCard';

import { ProductCardListProps } from './ProductCardList.types';

export default function ProductCardList({ title, products }: ProductCardListProps) {
  return (
    <div>
      {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}
      <ul className="grid grid-cols-4 gap-8">
        {products.map((product) => {
          if (!product) {
            return null;
          }

          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

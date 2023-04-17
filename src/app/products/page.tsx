import { products } from "@/mock-data/products";

import { ProductCardList } from "@/components/common";

export default function Products() {
  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductCardList products={products} />
    </main>
  );
}

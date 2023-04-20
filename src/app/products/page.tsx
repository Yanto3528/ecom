import { products } from "@/mock-data/products";

import { ProductCardList } from "@/components/common";
import { fetchProducts } from "@/services/products.service";

export default async function Products() {
  // const response = await fetchProducts();
  const response = { data: [] };

  if (response.data.length === 0) {
    return null;
  }

  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductCardList products={response.data} />
    </main>
  );
}

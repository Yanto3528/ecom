import { ProductCardList } from '@/components/shop';
import { fetchProducts } from '@/services/products.service';

export default async function Products() {
  const { data: products } = await fetchProducts();

  if (products.length === 0) {
    return null;
  }

  return (
    <main className="container">
      <h1 className="mb-8 text-3xl font-bold">All Products</h1>
      <ProductCardList products={products} />
    </main>
  );
}

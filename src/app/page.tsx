import { ProductCardList } from "@/components/common";
import { products } from "@/mock-data/products";

export default function Home() {
  return (
    <main className="container">
      <ProductCardList title="Gadget" products={products} />
    </main>
  );
}

import { products } from "@/mock-data/products";

import { ProductImages, ProductDetails } from "./components";

interface ProductDetailProps {
  params: { id: string };
}

function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return null;
  }

  return (
    <main className="container flex justify-between gap-10 items-start">
      <ProductImages images={product.images} />
      <ProductDetails product={product} />
    </main>
  );
}

export default ProductDetail;

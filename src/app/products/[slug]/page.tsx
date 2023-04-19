import { fetchProductBySlug } from "@/services/products.service";

import { ProductImages, ProductDetails } from "./components";

interface ProductDetailProps {
  params: { slug: string };
}

async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return null;
  }

  return (
    <main className="container flex justify-between gap-10 items-start">
      <ProductImages images={product.images || []} />
      <ProductDetails product={product} />
    </main>
  );
}

export default ProductDetail;

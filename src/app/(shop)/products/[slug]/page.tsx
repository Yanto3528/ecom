import { fetchProductBySlug } from '@/services/products.service';

import { ProductImages, ProductDetails } from './components';

interface ProductDetailProps {
  params: { slug: string };
}

export const revalidate = 10;

async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params;
  const { data: product } = await fetchProductBySlug(slug);

  if (!product) {
    return null;
  }

  return (
    <main className="container flex items-start justify-between gap-10">
      <ProductImages images={product.images || []} />
      <ProductDetails product={product} />
    </main>
  );
}

export default ProductDetail;

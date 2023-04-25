import { fetchCategories } from '@/services/categories.service';
import { fetchProductBySlug } from '@/services/products.service';

import { GeneralInfoForm } from '../components';

interface ProductDetailProps {
  params: { slug: string };
}

export default async function ProductDetail({ params: { slug } }: ProductDetailProps) {
  const product = await fetchProductBySlug(slug);
  const { data: categories } = await fetchCategories();

  return (
    <div>
      <h1 className="mb-4">{product.name}</h1>
      <GeneralInfoForm product={product} categories={categories} isEditing />
    </div>
  );
}

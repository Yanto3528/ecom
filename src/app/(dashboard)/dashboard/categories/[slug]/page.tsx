import { fetchCategoryBySlug } from '@/services/categories.service';

import { CategoryForm } from '../components';

interface CategoryDetailProps {
  params: { slug: string };
}

export default async function CategoryDetail({ params: { slug } }: CategoryDetailProps) {
  const category = await fetchCategoryBySlug(slug);

  return (
    <div>
      <h1 className="mb-4">Category Detail</h1>
      <CategoryForm category={category} isEditing />
    </div>
  );
}

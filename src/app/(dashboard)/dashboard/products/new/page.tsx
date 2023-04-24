import { fetchCategories } from '@/services/categories.service';

import { GeneralInfoForm } from './components';

export default async function NewProduct() {
  const { data: categories } = await fetchCategories();

  return (
    <main>
      <h1 className="mb-10 text-3xl font-bold">New Product</h1>
      <GeneralInfoForm categories={categories} />
    </main>
  );
}

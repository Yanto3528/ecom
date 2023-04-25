import { Button } from '@/components/ui';

import { CategoriesTable } from './components';

export default function Categories() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Categories</h1>
        <Button href="/dashboard/categories/new">Create Category</Button>
      </div>
      <CategoriesTable />
    </div>
  );
}

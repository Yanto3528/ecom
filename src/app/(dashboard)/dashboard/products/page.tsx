'use client';

import { Button } from '@/components/ui';

import { ProductTable } from './components';

export default function DashboardProducts() {
  return (
    <main>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Products</h1>
        <Button href="/dashboard/products/new">Create Product</Button>
      </div>
      <ProductTable />
    </main>
  );
}

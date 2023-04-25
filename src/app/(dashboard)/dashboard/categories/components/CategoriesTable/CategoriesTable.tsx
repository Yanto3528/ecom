'use client';

import { useRouter } from 'next/navigation';

import { Table } from '@/components/ui';
import { useFetchClientCategoriesQuery } from '@/hooks/services/categories.service.hooks';

export default function CategoriesTable() {
  const { data, isLoading } = useFetchClientCategoriesQuery();
  const router = useRouter();

  const onRowClick = (slug: string) => () => {
    router.push(`/dashboard/categories/${slug}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const categories = data?.data;

  return (
    <table className="w-full">
      <thead>
        <Table.Row>
          <Table.Head>Category name</Table.Head>
          <Table.Head>No. of Products</Table.Head>
        </Table.Row>
      </thead>
      <tbody>
        {categories?.map((category) => (
          <Table.Row
            key={category.id}
            className="cursor-pointer transition-all hover:bg-gray-100"
            onClick={onRowClick(category.slug)}
          >
            <Table.Data>{category.name}</Table.Data>
            <Table.Data>{category.products.length}</Table.Data>
          </Table.Row>
        ))}
      </tbody>
    </table>
  );
}

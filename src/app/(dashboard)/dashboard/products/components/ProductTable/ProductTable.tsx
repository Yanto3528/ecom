import Image from 'next/image';

import { Table } from '@/components/ui';
import { useFetchClientProductsQuery } from '@/hooks/services/products.service.hooks';

export default function ProductTable() {
  const { data, isLoading } = useFetchClientProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <thead>
        <Table.Row>
          <Table.Head className="w-[30%]">Product</Table.Head>
          <Table.Head className="w-[40%]">Description</Table.Head>
          <Table.Head>Quantity</Table.Head>
          <Table.Head>Price</Table.Head>
          <Table.Head>Last updated</Table.Head>
        </Table.Row>
      </thead>
      <tbody>
        {data?.data.map((product) => (
          <Table.Row key={product.id} className="cursor-pointer transition-all hover:bg-gray-100">
            <Table.Data>
              <div className="flex items-center gap-4">
                <div className="relative aspect-square w-14">
                  <Image
                    src={product.images?.[0]?.url || ''}
                    alt={product.images?.[0]?.alt || ''}
                    // width={50}
                    // height={50}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="flex-1">{product.name}</span>
              </div>
            </Table.Data>
            <Table.Data>{product.description}</Table.Data>
            <Table.Data>{product.quantity}</Table.Data>
            <Table.Data>{product.price}</Table.Data>
            <Table.Data>{new Date(product.updatedAt).toDateString()}</Table.Data>
          </Table.Row>
        ))}
        {/* <Table.Row className="cursor-pointer transition-all hover:bg-gray-100">
          <Table.Data>Lorem ipsum dolor sit amet.</Table.Data>
          <Table.Data>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sed?
          </Table.Data>
          <Table.Data>50</Table.Data>
          <Table.Data>29.99</Table.Data>
          <Table.Data>{new Date().toDateString()}</Table.Data>
        </Table.Row> */}
      </tbody>
    </Table>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { formatCurrency } from '@/lib/utils';

import { ProductCardProps } from './ProductCard.types';

export default function ProductCard({ product }: ProductCardProps) {
  const { slug, name, images, price, categories } = product;

  return (
    <Link href={`/products/${slug}`} className="block h-full cursor-pointer overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={images?.[0] || ''}
          alt={`${product.name}` || ''}
          fill
          className="object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-1 py-4">
        <h3 className="truncate text-base font-normal">{name}</h3>
        <p className="text-xxs uppercase text-gray-500">{categories?.name}</p>
        <p className="font-medium">{formatCurrency(price)}</p>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { formatCurrency } from '@/lib/utils';

import { ProductCardProps } from './ProductCard.types';

export default function ProductCard({ product }: ProductCardProps) {
  const { slug, name, images, price } = product;

  return (
    <Link
      href={`/products/${slug}`}
      className="block h-full cursor-pointer overflow-hidden rounded-md bg-white shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={images?.[0].url || ''}
          alt={images?.[0].alt || ''}
          fill
          className="object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">{formatCurrency(price)}</p>
      </div>
    </Link>
  );
}

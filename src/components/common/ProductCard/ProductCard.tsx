import Image from "next/image";
import Link from "next/link";

import { formatCurrency } from "@/lib/utils";

import { ProductCardProps } from "./ProductCard.types";

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, images, price } = product;

  return (
    <Link
      href={`/products/${id}`}
      className="bg-white shadow-md rounded-md h-full cursor-pointer"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          fill
          className="object-cover hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500">{formatCurrency(price)}</p>
      </div>
    </Link>
  );
}

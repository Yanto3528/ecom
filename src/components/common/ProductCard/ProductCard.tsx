import Image from "next/image";
import { ProductCardProps } from "./ProductCard.types";

export function ProductCard({ product }: ProductCardProps) {
  const { name, image, price } = product;

  return (
    <div className="bg-white shadow-md rounded-md h-full cursor-pointer">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image[0].url}
          alt={image[0].alt}
          fill
          className="object-contain hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    </div>
  );
}

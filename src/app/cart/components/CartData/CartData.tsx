import Image from "next/image";
import { Trash2 } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

import { InputNumber } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

import { CardDataProps } from "./CardData.types";
import { useCartStore } from "@/store/cart.store";

export default function CartData({ product, quantity }: CardDataProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeCartItem = useCartStore((state) => state.removeItem);

  const onQuantityChange = (value: number) => {
    updateQuantity(value, product);
  };

  const onRemoveItem = () => {
    removeCartItem(product.id);
  };

  return (
    <tr className="border-b border-slate-200">
      <td className="flex items-center py-4 gap-4">
        <Image
          src={product.images?.[0].url || ""}
          alt={product.images?.[0].alt || ""}
          width={100}
          height={100}
        />
        <div>
          <p className="font-bold">{product.name}</p>
        </div>
      </td>
      <td className="text-center py-4">{formatCurrency(product.price)}</td>
      <td>
        <InputNumber
          value={quantity}
          onChange={onQuantityChange}
          min={1}
          max={product.quantity}
        />
      </td>
      <td className="text-center py-4">
        {formatCurrency(Number(product.price) * quantity)}
      </td>
      <td className="text-center py-4">
        <button onClick={onRemoveItem}>
          <Trash2 />
        </button>
      </td>
    </tr>
  );
}

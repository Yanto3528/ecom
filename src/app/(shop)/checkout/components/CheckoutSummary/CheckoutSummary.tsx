"use client";

import { useMemo } from "react";
import Image from "next/image";

import { useStore } from "@/hooks/common";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutSummary() {
  const cartItems = useStore(useCartStore, (state) => state.items);

  const totalPrice = useMemo(() => {
    if (!cartItems) {
      return 0;
    }

    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div className="p-4 bg-gray-100 w-[40%] flex flex-col">
      <h2 className="font-bold text-2xl mb-8">Summary</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul className="flex flex-col gap-4 flex-1">
          {cartItems.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-2 items-start">
              <div className="relative w-16 aspect-square">
                <Image
                  src={product.images?.[0].url || ""}
                  alt={product.images?.[0].alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold">{product.name}</p>
                <p className="text-xs text-gray-500">
                  {formatCurrency(product.price)} x {quantity}
                </p>
              </div>
              <p className="font-bold ml-4">
                {formatCurrency(product.price * quantity)}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      <hr className="bg-black h-[2px] w-full my-4" />
      <div className="flex justify-between items-center font-bold text-xl">
        <p>Total</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
}

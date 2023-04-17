"use client";

import { useMemo } from "react";

import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui";

export default function Summary() {
  const cartItems = useCartStore((state) => state.items);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );
  }, [cartItems]);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="p-8 border min-w-[20rem] border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <span className="font-bold">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping fee</p>
            <span className="font-bold">Calculated at next step</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mt-6 flex items-center font-bold text-xl justify-between">
          <p>Total</p>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

"use client";

import { useMemo } from "react";

import { useCartStore } from "@/store/cart.store";
import { ShoppingBag } from "lucide-react";

export default function Cart() {
  const cartItems = useCartStore((state) => state.items);

  console.log("cartItems: ", cartItems);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <button className="relative">
      <ShoppingBag />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 bg-black rounded-full flex items-center justify-center w-4 h-4 translate-x-1/2 -translate-y-1/2 text-white text-xxs">
          {totalItems}
        </span>
      )}
    </button>
  );
}

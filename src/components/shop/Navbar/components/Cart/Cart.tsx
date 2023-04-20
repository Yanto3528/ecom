"use client";

import { useMemo } from "react";
import { ShoppingBag } from "lucide-react";

import { useCartStore } from "@/store/cart.store";
import { useStore } from "@/hooks/common/use-store";
import Link from "next/link";

export default function Cart() {
  const cartItems = useStore(useCartStore, (state) => state.items);

  const totalItems = useMemo(() => {
    return cartItems?.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <Link href="/cart" className="relative">
      <ShoppingBag />
      {totalItems && totalItems > 0 ? (
        <span className="absolute top-0 right-0 bg-primary rounded-full flex items-center justify-center w-4 h-4 translate-x-1/2 -translate-y-1/2 text-white text-xxs">
          {totalItems}
        </span>
      ) : null}
    </Link>
  );
}

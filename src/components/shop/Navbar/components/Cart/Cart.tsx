'use client';

import { useMemo } from 'react';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { useStore } from '@/hooks/common/use-store';
import { useCartStore } from '@/store/cart.store';

export default function Cart() {
  const cartItems = useStore(useCartStore, (state) => state.items);

  const totalItems = useMemo(
    () => cartItems?.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  return (
    <Link href="/cart" className="relative">
      <ShoppingBag />
      {totalItems && totalItems > 0 ? (
        <span className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary text-xxs text-white">
          {totalItems}
        </span>
      ) : null}
    </Link>
  );
}

'use client';

import { useMemo } from 'react';

import Image from 'next/image';

import { useStore } from '@/hooks/common';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

export default function CheckoutSummary() {
  const cartItems = useStore(useCartStore, (state) => state.items);

  const totalPrice = useMemo(() => {
    if (!cartItems) {
      return 0;
    }

    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="flex w-[40%] flex-col bg-gray-100 p-4">
      <h2 className="mb-8 text-2xl font-bold">Summary</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul className="flex flex-1 flex-col gap-4">
          {cartItems.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-start gap-2">
              <div className="relative aspect-square w-16">
                <Image
                  src={product.images?.[0] || ''}
                  alt={product.name || ''}
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
              <p className="ml-4 font-bold">{formatCurrency(product.price * quantity)}</p>
            </li>
          ))}
        </ul>
      ) : null}
      <hr className="my-4 h-[2px] w-full bg-black" />
      <div className="flex items-center justify-between text-xl font-bold">
        <p>Total</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
}

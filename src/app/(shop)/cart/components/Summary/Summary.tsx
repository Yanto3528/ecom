'use client';

import { useMemo } from 'react';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui';
import { useStore } from '@/hooks/common';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

export default function Summary() {
  const cartItems = useStore(useCartStore, (state) => state.items);
  const { data } = useSession();
  const router = useRouter();

  const subtotal = useMemo(
    () => cartItems?.reduce((acc, item) => acc + item.quantity * item.product.price, 0) || 0,
    [cartItems]
  );

  const onCheckout = () => {
    if (data?.user) {
      router.push('/checkout');
      return;
    }

    router.push('/auth/login');
  };

  if (!cartItems || cartItems?.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="min-w-[20rem] rounded-lg border border-gray-200 p-8">
        <h2 className="mb-4 text-2xl font-bold">Summary</h2>
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
        <div className="mt-6 flex items-center justify-between text-xl font-bold">
          <p>Total</p>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>
      <Button onClick={onCheckout}>{data?.user ? 'Checkout' : 'Sign in to checkout'}</Button>
    </div>
  );
}

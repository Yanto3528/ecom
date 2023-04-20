"use client";

import { useEffect } from "react";

import { StripeElements } from "@/components/common";
import { useCreatePaymentIntentMutation } from "@/hooks/services/stripe.service.hooks";
import { useStore } from "@/hooks/common";
import { useCartStore } from "@/store/cart.store";

import { CheckoutForm, CheckoutSummary } from "./components";

export default function Checkout() {
  const cartItems = useStore(useCartStore, (state) => state.items);
  const { mutate, data: clientSecret } = useCreatePaymentIntentMutation();

  useEffect(() => {
    if (cartItems && cartItems?.length > 0) {
      mutate({
        items: cartItems.map((item) => ({
          quantity: item.quantity,
          productId: item.product.id,
        })),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>
      {clientSecret && (
        <div className="flex gap-10">
          <StripeElements clientSecret={clientSecret}>
            <CheckoutForm />
          </StripeElements>
          <CheckoutSummary />
        </div>
      )}
    </main>
  );
}

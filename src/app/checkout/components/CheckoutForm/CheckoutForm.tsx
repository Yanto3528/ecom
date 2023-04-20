"use client";

import { FormEventHandler } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { Button } from "@/components/ui";
import { useSession } from "next-auth/react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { data } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const returnUrl = `${window.origin}/checkout/success`;

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: returnUrl,
        receipt_email: data?.user.email || "",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <PaymentElement />
      <Button className="w-full mt-8">Pay</Button>
    </form>
  );
}

import { StripeElements } from "@/components/common";

import { CheckoutForm, CheckoutSummary } from "./components";
import { fetchClientSecret } from "@/services/stripe.service";

export default async function Checkout() {
  const clientSecret = await fetchClientSecret();

  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>
      <div className="flex gap-10">
        <StripeElements clientSecret={clientSecret}>
          <CheckoutForm />
        </StripeElements>
        <CheckoutSummary />
      </div>
    </main>
  );
}

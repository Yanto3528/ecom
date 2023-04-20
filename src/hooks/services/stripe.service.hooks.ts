import { useMutation } from "@tanstack/react-query";

import { createPaymentIntent } from "@/services/stripe.service";

export const useCreatePaymentIntentMutation = () => {
  const mutation = useMutation(createPaymentIntent);

  return mutation;
};

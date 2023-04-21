import { BASE_API_URL } from '@/constants/url.constants';

import { api } from './api';

interface CreatePaymentIntentPayload {
  items: {
    quantity: number;
    productId: number;
  }[];
}

export const createPaymentIntent = async (payload: CreatePaymentIntentPayload): Promise<string> => {
  const response = await api.post(`${BASE_API_URL}/create-payment-intent`, payload);

  return response.data.data;
};

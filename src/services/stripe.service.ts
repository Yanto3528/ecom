import { BASE_API_URL } from "@/constants/url.constants";

export const fetchClientSecret = async (): Promise<string> => {
  const response = await fetch(`${BASE_API_URL}/create-payment-intent`);

  const responseBody = await response.json();

  return responseBody.data;
};

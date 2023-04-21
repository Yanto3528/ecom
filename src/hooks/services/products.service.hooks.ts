import { useQuery } from '@tanstack/react-query';

import { PRODUCT_QUERY_KEY } from '@/constants/query.constants';
import { fetchClientProducts, fetchClientProductBySlug } from '@/services/products.service';

export const useFetchClientProductsQuery = () => {
  const query = useQuery([PRODUCT_QUERY_KEY], fetchClientProducts);

  return query;
};

export const useFetchClientProductsBySlugQuery = (slug: string) => {
  const query = useQuery([PRODUCT_QUERY_KEY, slug], () => fetchClientProductBySlug(slug));

  return query;
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { PRODUCT_QUERY_KEY } from '@/constants/query.constants';
import {
  fetchClientProducts,
  fetchClientProductBySlug,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from '@/services/products.service';

export const useFetchClientProductsQuery = () => {
  const query = useQuery([PRODUCT_QUERY_KEY], fetchClientProducts);

  return query;
};

export const useFetchClientProductsBySlugQuery = (slug: string) => {
  const query = useQuery([PRODUCT_QUERY_KEY, slug], () => fetchClientProductBySlug(slug));

  return query;
};

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createNewProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });

  return mutation;
};

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });

  return mutation;
};

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });

  return mutation;
};

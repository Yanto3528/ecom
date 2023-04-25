import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { CATEGORY_QUERY_KEY } from '@/constants/query.constants';
import {
  fetchClientCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
} from '@/services/categories.service';

export const useFetchClientCategoriesQuery = () => {
  const query = useQuery([CATEGORY_QUERY_KEY], fetchClientCategories);

  return query;
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createNewCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries([CATEGORY_QUERY_KEY]);
    },
  });

  return mutation;
};

export const useUpdateCategoryMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries([CATEGORY_QUERY_KEY]);
    },
  });

  return mutation;
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries([CATEGORY_QUERY_KEY]);
    },
  });

  return mutation;
};

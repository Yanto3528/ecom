import { BASE_API_URL } from '@/constants/url.constants';
import { CategoryEntity } from '@/entities/category.entity';
import { CreateCategoryPayload } from '@/types/categories';
import { PaginatedResponse } from '@/types/common';

import { api } from './api';

// Client fetching
export const fetchClientCategories = async (): Promise<PaginatedResponse<CategoryEntity>> =>
  api.get('/categories').then((response) => response.data);

export const fetchClientCategoryBySlug = async (slug: string): Promise<CategoryEntity> =>
  api.get(`/categories/${slug}`).then((response) => response.data.data);

export const createNewCategory = async (payload: CreateCategoryPayload): Promise<CategoryEntity> =>
  api.post('/categories', payload).then((response) => response.data.data);

export const deleteCategory = async (slug: string): Promise<null> =>
  api.delete(`/categories/${slug}`).then((response) => response.data);

export const updateCategory = async ({
  slug,
  payload,
}: {
  slug: string;
  payload: Partial<CreateCategoryPayload>;
}): Promise<CategoryEntity> =>
  api.put(`/categories/${slug}`, payload).then((response) => response.data.data);

// Server fetching
export const fetchCategories = async (): Promise<PaginatedResponse<CategoryEntity>> => {
  try {
    const response = await fetch(`${BASE_API_URL}/categories`, {
      next: { revalidate: 60 },
    });

    const responseBody = await response.json();

    return responseBody;
  } catch (error) {
    return {
      status: 'error',
      data: [],
      pagination: {
        totalCount: 0,
        totalPage: 0,
      },
    };
  }
};

export const fetchCategoryBySlug = async (slug: string): Promise<CategoryEntity> => {
  const response = await fetch(`${BASE_API_URL}/categories/${slug}`, {
    next: { revalidate: 60 },
  });

  const responseBody = await response.json();

  return responseBody.data;
};

import { BASE_API_URL } from '@/constants/url.constants';
import { CategoryEntity } from '@/entities/category.entity';
import { PaginatedResponse } from '@/types/common';

import { api } from './api';

// Client fetching
export const fetchClientCategories = async (): Promise<PaginatedResponse<CategoryEntity>> =>
  api.get('/categories').then((response) => response.data);

export const fetchClientCategoryBySlug = async (slug: string): Promise<CategoryEntity> =>
  api.get(`/categories/${slug}`).then((response) => response.data.data);

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

import { BASE_API_URL } from '@/constants/url.constants';
import { ProductEntity } from '@/entities/product.entity';
import { PaginatedResponse } from '@/types/common';
import { CreateProductPayload } from '@/types/product';

import { api } from './api';

// Called by Client component
export const fetchClientProducts = async (): Promise<PaginatedResponse<ProductEntity>> =>
  api.get('/products').then((response) => response.data);

export const fetchClientProductBySlug = async (slug: string): Promise<ProductEntity> =>
  api.get(`/products/${slug}`).then((response) => response.data.data);

export const createNewProduct = async (payload: CreateProductPayload): Promise<ProductEntity> =>
  api.post('/products', payload).then((response) => response.data.data);

// Called by Server component
export const fetchProducts = async (): Promise<PaginatedResponse<ProductEntity>> => {
  try {
    const response = await fetch(`${BASE_API_URL}/products`, {
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

export const fetchProductBySlug = async (slug: string): Promise<ProductEntity> => {
  const response = await fetch(`${BASE_API_URL}/products/${slug}`, {
    next: { revalidate: 60 },
  });

  const responseBody = await response.json();

  return responseBody.data;
};

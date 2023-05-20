// import { BASE_API_URL } from '@/constants/url.constants';
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

export const deleteProduct = async (slug: string): Promise<null> =>
  api.delete(`/products/${slug}`).then((response) => response.data);

export const updateProduct = async ({
  slug,
  payload,
}: {
  slug: string;
  payload: Partial<CreateProductPayload>;
}): Promise<ProductEntity> =>
  api.put(`/products/${slug}`, payload).then((response) => response.data.data);

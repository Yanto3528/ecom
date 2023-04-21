import { BASE_API_URL } from '@/constants/url.constants';
import { ProductEntity } from '@/entities/product.entity';
import { PaginatedResponse } from '@/types/common';

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

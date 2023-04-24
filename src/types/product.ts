export interface ProductImage {
  url: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  quantity: number;
  category: string;
}

export interface CreateProductPayload {
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  slug?: string;
}

export interface CreateCollectionInput {
  name: string;
  products: { id: number }[];
}

export interface UpdateCollectionInput extends Partial<CreateCollectionInput> {
  slug?: string;
}

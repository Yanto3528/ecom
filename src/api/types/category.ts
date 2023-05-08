export interface CreateCategoryInput {
  name: string;
}

export interface UpdateCategoryInput extends Partial<CreateCategoryInput> {
  slug?: string;
}

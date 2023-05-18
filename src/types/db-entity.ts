import { Database } from './database';

export type Category = Database['public']['Tables']['categories']['Row'];
export type Product = Database['public']['Tables']['products']['Row'];
export type ProductWithCategory = Product & {
  categories: Category;
};
export type Collection = Database['public']['Tables']['collections']['Row'];

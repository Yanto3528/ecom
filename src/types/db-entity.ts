import { Database } from './database';

export type Category = Database['public']['Tables']['categories']['Row'];
export type Product = Database['public']['Tables']['products']['Row'];
export type ProductWithCategory = Product & {
  categories: Category | null;
};
export type Collection = Database['public']['Tables']['collections']['Row'];
export type OrderItem = Database['public']['Tables']['order_items']['Row'];
export type OrderItemInsert = Database['public']['Tables']['order_items']['Insert'];

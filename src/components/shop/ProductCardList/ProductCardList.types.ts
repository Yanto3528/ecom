import { ProductWithCategory } from '@/types/db-entity';

export interface ProductCardListProps {
  title?: string;
  products: { products: ProductWithCategory }[];
}

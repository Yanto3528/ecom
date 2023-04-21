import { ProductEntity } from '@/entities/product.entity';

export interface ProductCardListProps {
  title?: string;
  products: ProductEntity[];
}

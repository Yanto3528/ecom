import { CategoryEntity } from '@/entities/category.entity';
import { ProductEntity } from '@/entities/product.entity';

export interface GeneralInfoFormProps {
  categories: CategoryEntity[];
  product?: ProductEntity;
  isEditing?: boolean;
}

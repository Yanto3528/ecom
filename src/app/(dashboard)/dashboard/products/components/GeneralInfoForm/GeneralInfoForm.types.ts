import { CategoryEntity } from '@/entities/category.entity';
import { ProductWithCategory } from '@/types/db-entity';

export interface GeneralInfoFormProps {
  categories: CategoryEntity[];
  product?: ProductWithCategory;
  isEditing?: boolean;
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@/components/ui';
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from '@/hooks/services/categories.service.hooks';

import { CategoryFormProps } from './CategoryForm.types';

interface FormValues {
  name: string;
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
});

export default function CategoryForm({ category, isEditing }: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: category?.name,
    },
  });
  const router = useRouter();

  const { mutateAsync: mutateCreateCategory, isLoading: createCategoryLoading } =
    useCreateCategoryMutation();
  const { mutateAsync: mutateUpdateCategory, isLoading: updateCategoryLoading } =
    useUpdateCategoryMutation();
  const { mutateAsync: mutateDeleteCategory, isLoading: deleteCategoryLoading } =
    useDeleteCategoryMutation();

  const onSubmit = async (data: FormValues) => {
    const payload = {
      name: data.name,
    };

    if (isEditing) {
      mutateUpdateCategory({
        slug: category?.slug || '',
        payload,
      });
    } else {
      await mutateCreateCategory(payload);
    }

    router.push('/dashboard/categories');
  };

  const onDeleteCategory = async () => {
    await mutateDeleteCategory(category?.slug || '');
    router.push('/dashboard/categories');
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Category Name"
        placeholder="Enter category name"
        error={errors.name?.message}
        {...register('name')}
      />
      <Button
        type="submit"
        loading={createCategoryLoading || updateCategoryLoading || deleteCategoryLoading}
      >
        {isEditing ? 'Update category' : 'Create category'}
      </Button>
      {isEditing && (
        <Button colorScheme="danger" onClick={onDeleteCategory}>
          Delete
        </Button>
      )}
    </form>
  );
}

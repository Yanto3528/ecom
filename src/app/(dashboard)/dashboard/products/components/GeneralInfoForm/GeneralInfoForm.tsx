'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input, Textarea, InputNumber, Select } from '@/components/ui';
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from '@/hooks/services/products.service.hooks';

import { GeneralInfoFormProps } from './GeneralInfoForm.types';

interface FormValues {
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: string;
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  price: z.number().nonnegative('Price must be greater than 0'),
  quantity: z.number().nonnegative('Quantity must be greater than 0'),
  categoryId: z.string().nonempty('Category is required'),
});

export default function GeneralInfoForm({ product, categories, isEditing }: GeneralInfoFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      categoryId: product?.categoryId?.toString(),
      name: product?.name,
      description: product?.description,
      price: product?.price,
      quantity: product?.quantity,
    },
  });

  const router = useRouter();

  const { mutateAsync: mutateCreateProduct, isLoading: createProductLoading } =
    useCreateProductMutation();
  const { mutateAsync: mutateUpdateProduct, isLoading: updateProductLoading } =
    useUpdateProductMutation();
  const { mutateAsync: mutateDeleteProduct, isLoading: deleteProductLoading } =
    useDeleteProductMutation();

  const onSubmit = async (data: FormValues) => {
    const payload = {
      name: data.name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      categoryId: Number(data.categoryId),
    };
    if (isEditing) {
      await mutateUpdateProduct({
        slug: product?.slug || '',
        payload,
      });
    } else {
      await mutateCreateProduct(payload);
    }

    router.push('/dashboard/products');
  };

  const onDeleteProduct = async () => {
    await mutateDeleteProduct(product?.slug || '');
    router.push('/dashboard/products');
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">General Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Product name"
          placeholder="Enter product name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Textarea
          label="Description"
          placeholder="Enter product description"
          error={errors.description?.message}
          rows={5}
          {...register('description')}
        />
        <Controller
          render={({ field }) => (
            <InputNumber
              min={1}
              label="Quantity"
              placeholder="Enter product quantity"
              error={errors.quantity?.message}
              {...field}
            />
          )}
          name="quantity"
          control={control}
          defaultValue={0}
        />
        <Controller
          render={({ field }) => (
            <InputNumber
              min={0}
              step={0.01}
              label="Price"
              placeholder="Enter product price"
              error={errors.price?.message}
              {...field}
            />
          )}
          name="price"
          control={control}
          defaultValue={0}
        />
        <Controller
          render={({ field: { onChange, value, name } }) => (
            <Select
              label="Select category"
              placeholder="Select category"
              error={errors.categoryId?.message}
              onChange={onChange}
              value={value}
              name={name}
            >
              {categories.map((category) => (
                <Select.Item key={category.id} value={category.id.toString()}>
                  {category.name}
                </Select.Item>
              ))}
            </Select>
          )}
          control={control}
          name="categoryId"
        />
        <Button
          type="submit"
          loading={createProductLoading || updateProductLoading || deleteProductLoading}
        >
          {isEditing ? 'Update product' : 'Create product'}
        </Button>
        {isEditing && (
          <Button
            colorScheme="danger"
            onClick={onDeleteProduct}
            loading={createProductLoading || updateProductLoading || deleteProductLoading}
          >
            Delete
          </Button>
        )}
      </form>
    </div>
  );
}

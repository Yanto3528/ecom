'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input, Textarea, InputNumber } from '@/components/ui';

interface FormValues {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  price: z.number().nonnegative('Price must be greater than 0'),
  quantity: z.number().nonnegative('Quantity must be greater than 0'),
});

export default function GeneralInfoForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('data: ', data);
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
        <Button type="submit">Create product</Button>
      </form>
    </div>
  );
}

'use client';

import { useState } from 'react';

import { Button, InputNumber } from '@/components/ui';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

import { ProductDetailsProps } from './ProductDetails.types';

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);

  const onAddItem = () => {
    addItemToCart(selectedQuantity, product);
  };

  const onChangeQuantity = (value: number) => {
    setSelectedQuantity(value);
  };

  return (
    <div className="flex-1">
      <span className="text-xs uppercase text-gray-500">{product.categories?.name}</span>
      <h1 className="mb-6 text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="mt-8 text-2xl font-bold">{formatCurrency(product.price)}</p>
      <div className="my-4">
        <label htmlFor="quantity" className="mb-2 block">
          Quantity{' '}
          {product.quantity <= 0 && <span className="font-bold text-red-500">Out of stock</span>}
        </label>
        <InputNumber
          placeholder="Select quantity"
          min={1}
          max={product.quantity}
          onChange={onChangeQuantity}
          value={selectedQuantity}
          disabled={product.quantity <= 0}
        />
      </div>
      <Button disabled={product.quantity <= 0} onClick={onAddItem}>
        Add to cart
      </Button>
    </div>
  );
}

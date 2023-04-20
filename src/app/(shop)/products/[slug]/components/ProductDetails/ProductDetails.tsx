"use client";

import { Button, InputNumber } from "@/components/ui";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

import { ProductDetailsProps } from "./ProductDetails.types";

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
      <span className="text-gray-500 uppercase text-xs">
        {product.category?.name}
      </span>
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold text-2xl mt-8">{formatCurrency(product.price)}</p>
      <div className="my-4">
        <label htmlFor="quantity" className="block mb-2">
          Quantity{" "}
          {product.quantity <= 0 && (
            <span className="text-red-500 font-bold">Out of stock</span>
          )}
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

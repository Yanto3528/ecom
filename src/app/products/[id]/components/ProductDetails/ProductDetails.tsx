"use client";

import { Button, Input } from "@/components/ui";
import { useCartStore } from "@/store/cart.store";
import { ProductDetailsProps } from "./ProductDetails.types";

export default function ProductDetails({ product }: ProductDetailsProps) {
  const addItemToCart = useCartStore((state) => state.addItem);

  const onAddItem = () => {
    addItemToCart(1, product);
  };

  return (
    <div className="flex-1">
      <span className="text-gray-500">{product.category}</span>
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold text-2xl mt-8">${product.price}</p>
      <div className="my-4">
        <label htmlFor="quantity" className="block mb-2">
          Quantity{" "}
          {product.quantity <= 0 && (
            <span className="text-red-500 font-bold">Out of stock</span>
          )}
        </label>
        <Input
          type="number"
          placeholder="Select quantity"
          min={1}
          max={product.quantity}
          disabled={product.quantity <= 0}
        />
      </div>
      <Button disabled={product.quantity <= 0} onClick={onAddItem}>
        Add to cart
      </Button>
    </div>
  );
}

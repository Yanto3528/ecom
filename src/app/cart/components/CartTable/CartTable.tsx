"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui";
import { useCartStore } from "@/store/cart.store";

import CartData from "../CartData";

export default function CartTable() {
  const cartItems = useCartStore((state) => state.items);

  if (cartItems.length === 0) {
    return (
      <div>
        <p>Your cart is empty</p>
        <span>Please add some items to the cart</span>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr className="border-b border-slate-300">
          <th className="text-left px-4 w-[40%] py-4">Product</th>
          <th className="px-4">Unit Price</th>
          <th className="w-[10%] px-4">Quantity</th>
          <th className="px-4">Subtotal</th>
          <th className="px-4">Delete</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(({ quantity, product }) => (
          <CartData key={product.id} product={product} quantity={quantity} />
        ))}
      </tbody>
    </table>
  );
}

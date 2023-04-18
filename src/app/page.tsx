"use client";

import { ProductCardList } from "@/components/common";
import { products } from "@/mock-data/products";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  console.log("index data: ", data);

  return (
    <main className="container">
      <ProductCardList title="Gadget" products={products} />
    </main>
  );
}

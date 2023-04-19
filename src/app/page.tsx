import { ProductCardList } from "@/components/common";
import { products } from "@/mock-data/products";
import { fetchCollections } from "@/services/collections.service";

export default async function Home() {
  const bestSellerCollection = fetchCollections("best-seller");
  const popularCollection = fetchCollections("popular");

  const [bestSellerCollectionData, popularCollectionData] = await Promise.all([
    bestSellerCollection,
    popularCollection,
  ]);

  return (
    <main className="container">
      <div className="flex flex-col gap-10">
        <ProductCardList
          title={bestSellerCollectionData.name}
          products={bestSellerCollectionData.products}
        />
        <ProductCardList
          title={popularCollectionData.name}
          products={popularCollectionData.products}
        />
      </div>
    </main>
  );
}

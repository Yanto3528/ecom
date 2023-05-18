import { ProductCardList, USP } from '@/components/shop';
import { fetchCollectionData } from '@/services/collections.service';

import { Newsletter, Hero } from './components';

export default async function Home() {
  const { data: bestSellerCollectionData } = await fetchCollectionData('best-seller');
  const { data: popularCollectionData } = await fetchCollectionData('popular');

  const bestSellerCollectionProducts =
    bestSellerCollectionData?.products_and_collections.map(
      (productCollection) => productCollection.products
    ) || [];
  const popularCollectionProducts =
    popularCollectionData?.products_and_collections.map(
      (productCollection) => productCollection.products
    ) || [];

  return (
    <main>
      <Hero />
      <section className="container py-10">
        <div className="flex flex-col gap-10">
          {bestSellerCollectionData && (
            <ProductCardList
              title={bestSellerCollectionData.name}
              products={bestSellerCollectionProducts}
            />
          )}
          {popularCollectionData && (
            <ProductCardList
              title={popularCollectionData.name}
              products={popularCollectionProducts}
            />
          )}
        </div>
      </section>
      <USP />
      <Newsletter />
    </main>
  );
}

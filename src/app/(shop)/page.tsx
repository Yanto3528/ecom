import { ProductCardList, USP } from '@/components/shop';
import { fetchCollections } from '@/services/collections.service';

import { Newsletter, Hero } from './components';

export default async function Home() {
  const bestSellerCollection = fetchCollections('best-seller');
  const popularCollection = fetchCollections('popular');

  const [bestSellerCollectionData, popularCollectionData] = await Promise.all([
    bestSellerCollection,
    popularCollection,
  ]);

  return (
    <main>
      <Hero />
      <section className="container py-10">
        <div className="flex flex-col gap-10">
          {bestSellerCollectionData && (
            <ProductCardList
              title={bestSellerCollectionData.name}
              products={bestSellerCollectionData.products}
            />
          )}
          {popularCollectionData && (
            <ProductCardList
              title={popularCollectionData.name}
              products={popularCollectionData.products}
            />
          )}
        </div>
      </section>
      <USP />
      <Newsletter />
    </main>
  );
}

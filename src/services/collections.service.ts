import { createServerComponentSupabase } from '@/lib/supabase';
import { Collection, ProductWithCategory } from '@/types/db-entity';

type CollectionData = Collection & {
  products_and_collections: {
    products: ProductWithCategory;
  }[];
};

export async function fetchCollectionData(slug: string) {
  const supabase = createServerComponentSupabase();

  const response = await supabase
    .from('collections')
    .select('*, products_and_collections!inner (products (*, categories (*)))')
    .eq('slug', slug)
    .returns<CollectionData[]>();

  return { ...response, data: response.data?.[0] };
}

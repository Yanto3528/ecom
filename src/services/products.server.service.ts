import { createServerComponentSupabase } from '@/lib/server-supabase';
import { ProductWithCategory } from '@/types/db-entity';

export const fetchProducts = async () => {
  const supabase = createServerComponentSupabase();

  const response = await supabase.from('products').select('*, categories(*)');

  return { ...response, data: response.data as ProductWithCategory[] };
};

export const fetchProductBySlug = async (slug: string) => {
  const supabase = createServerComponentSupabase();
  const response = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .single();

  return { ...response, data: response.data as ProductWithCategory };
};

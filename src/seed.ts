/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

import { categories } from './mock-data/categories';
import { collections, collectionsToProducts } from './mock-data/collections';
import { products } from './mock-data/products';
import { Database } from './types/database';

dotenv.config();
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function seed() {
  await supabase.from('categories').delete();
  await supabase.from('products').delete();
  await supabase.from('collections').delete();
  await supabase.from('products_and_collections').delete();

  for (const category of categories) {
    await supabase.from('categories').insert(category);
  }

  for (const product of products) {
    await supabase.from('products').insert(product);
  }

  for (const collection of collections) {
    await supabase.from('collections').insert(collection);
  }

  for (const collectionToProduct of collectionsToProducts) {
    await supabase.from('products_and_collections').insert(collectionToProduct);
  }
}

seed();

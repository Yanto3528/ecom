import slugify from 'slugify';

import { CreateCollectionInput, UpdateCollectionInput } from '@/api/types/collection';
import { productInclude } from '@/entities/product.entity';
import { prisma } from '@/lib/prisma';

async function getCollections() {
  const collections = await prisma.collection.findMany({
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return collections;
}

async function getSingleCollection(slug: string) {
  const collection = await prisma.collection.findFirst({
    where: {
      slug,
    },
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return collection;
}

async function createCollection(input: CreateCollectionInput) {
  const { name, products } = input;

  const slug = slugify(name, { lower: true, trim: true, strict: true });

  const collection = await prisma.collection.create({
    data: {
      name,
      slug,
      products: {
        connect: products,
      },
    },
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return collection;
}

async function updateCollection(slug: string, input: UpdateCollectionInput) {
  const { name, slug: bodySlug, products } = input;

  const collection = await prisma.collection.update({
    where: {
      slug: slug as string,
    },
    data: {
      name,
      slug: bodySlug,
      products: {
        set: products,
      },
    },
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return collection;
}

async function deleteCollection(slug: string) {
  const collection = await prisma.collection.delete({
    where: {
      slug,
    },
  });

  return collection;
}

const collectionService = {
  getCollections,
  createCollection,
  getSingleCollection,
  updateCollection,
  deleteCollection,
};

export default collectionService;

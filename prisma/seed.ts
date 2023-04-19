import { PrismaClient } from "@prisma/client";

import { categories } from "../src/mock-data/categories";
import { products, productImages } from "../src/mock-data/products";
import { collections } from "../src/mock-data/collections";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.collection.deleteMany();

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.productImage.createMany({
    data: productImages,
  });

  await prisma.collection.createMany({
    data: collections.map((collection) => ({
      ...collection,
      products: undefined,
    })),
  });

  for (const collection of collections) {
    await prisma.collection.update({
      where: {
        id: collection.id,
      },
      data: {
        products: {
          connect: collection.products,
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

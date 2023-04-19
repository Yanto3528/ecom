import { PrismaClient } from "@prisma/client";

import { categories } from "../src/mock-data/categories";
import { products, productImages } from "../src/mock-data/products";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productImage.deleteMany();

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.productImage.createMany({
    data: productImages,
  });
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

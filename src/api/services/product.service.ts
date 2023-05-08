import slugify from 'slugify';

import { CreateProductInput, UpdateProductInput } from '@/api/types/product';
import { productInclude } from '@/entities/product.entity';
import { prisma } from '@/lib/prisma';

async function getProducts() {
  const products = await prisma.product.findMany({
    include: productInclude,
  });

  return products;
}

async function getSingleProduct(slug: string) {
  const product = await prisma.product.findFirst({
    where: {
      slug: slug as string,
    },
    include: productInclude,
  });

  return product;
}

async function createProduct(input: CreateProductInput) {
  const { name, description, price, quantity, categoryId } = input;

  const slug = slugify(name, { lower: true, trim: true, strict: true });

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price: Number(price?.toFixed(2)),
      quantity,
      slug,
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    include: productInclude,
  });

  return product;
}

async function updateProduct(slug: string, input: UpdateProductInput) {
  const { name, description, price, quantity, categoryId, slug: bodySlug } = input;

  const product = await prisma.product.update({
    where: {
      slug,
    },
    data: {
      name,
      slug: bodySlug,
      description,
      price: Number(price?.toFixed(2)),
      quantity,
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    include: productInclude,
  });

  return product;
}

async function deleteProduct(slug: string) {
  const product = await prisma.product.delete({
    where: {
      slug,
    },
  });

  return product;
}

const productService = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;

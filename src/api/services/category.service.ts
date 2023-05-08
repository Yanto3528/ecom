import slugify from 'slugify';

import { CreateCategoryInput, UpdateCategoryInput } from '@/api/types/category';
import { categoryInclude } from '@/entities/category.entity';
import { prisma } from '@/lib/prisma';

async function getCategories() {
  const category = await prisma.category.findMany({
    include: categoryInclude,
  });

  return category;
}

async function getSingleCategory(slug: string) {
  const category = await prisma.category.findFirst({
    where: {
      slug,
    },
    include: categoryInclude,
  });

  return category;
}

async function createCategory(input: CreateCategoryInput) {
  const { name } = input;

  const slug = slugify(name, { lower: true, trim: true, strict: true });

  const category = await prisma.category.create({
    data: {
      name,
      slug,
    },
    include: categoryInclude,
  });

  return category;
}

async function updateCategory(slug: string, input: UpdateCategoryInput) {
  const { name, slug: bodySlug } = input;

  const category = await prisma.category.update({
    where: {
      slug: slug as string,
    },
    data: {
      name,
      slug: bodySlug,
    },
    include: categoryInclude,
  });

  return category;
}

async function deleteCategory(slug: string) {
  const category = await prisma.category.delete({
    where: {
      slug,
    },
  });

  return category;
}

const categoryService = {
  getCategories,
  createCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;

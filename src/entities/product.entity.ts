import { Prisma } from '@prisma/client';

export const productInclude: Prisma.ProductInclude = {
  category: true,
  images: true,
};

export type ProductEntity = Prisma.ProductGetPayload<{
  include: typeof productInclude;
}>;

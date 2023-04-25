import { Prisma } from '@prisma/client';

export const categoryInclude: Prisma.CategoryInclude = {
  products: true,
};

export type CategoryEntity = Prisma.CategoryGetPayload<{
  include: {
    products: true;
  };
}>;

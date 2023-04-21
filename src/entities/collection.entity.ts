import { Prisma } from '@prisma/client';

import { productInclude } from './product.entity';

export type CollectionEntity = Prisma.CollectionGetPayload<{
  include: {
    products: {
      include: typeof productInclude;
    };
  };
}>;

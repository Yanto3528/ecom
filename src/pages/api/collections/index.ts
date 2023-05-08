import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import collectionService from '@/api/services/collection.service';
import { CreateCollectionInput } from '@/api/types/collection';

const createCollectionSchema = z.object({
  name: z.string().nonempty('Name is required'),
  products: z.array(z.object({ id: z.number() })),
});

const getCollections: NextApiHandler = async (_, res) => {
  const collections = await collectionService.getCollections();

  return res.status(200).json({
    status: 'success',
    data: collections,
    pagination: {
      totalCount: collections.length,
      totalPage: 1,
    },
  });
};

const createCollection: NextApiHandler = async (req, res) => {
  const { name, products } = req.body as CreateCollectionInput;

  const collection = await collectionService.createCollection({
    name,
    products,
  });

  return res.status(200).json({
    status: 'success',
    data: collection,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getCollections);
    case 'POST':
      return validate(req, res, createCollectionSchema, createCollection);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

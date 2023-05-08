import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import collectionService from '@/api/services/collection.service';
import { UpdateCollectionInput } from '@/api/types/collection';

const updateCollectionSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  products: z.array(z.object({ id: z.number() })).optional(),
});

const getCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const collection = await collectionService.getSingleCollection(slug as string);

  return res.status(200).json({
    status: 'success',
    data: collection,
    pagination: null,
  });
};

const updateCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const { name, slug: bodySlug, products } = req.body as UpdateCollectionInput;

  const collection = await collectionService.updateCollection(slug as string, {
    name,
    slug: bodySlug,
    products,
  });

  return res.status(200).json({
    status: 'success',
    data: collection,
  });
};

const deleteCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  await collectionService.deleteCollection(slug as string);

  return res.status(200).json({
    status: 'success',
    data: null,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getCollection);
    case 'PUT':
      return validate(req, res, updateCollectionSchema, updateCollection);
    case 'DELETE':
      return catchAsync(req, res, deleteCollection);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

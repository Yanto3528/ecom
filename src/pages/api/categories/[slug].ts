import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import categoryService from '@/api/services/category.service';

const updateCategorySchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
});

const getCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const category = await categoryService.getSingleCategory(slug as string);

  return res.status(200).json({
    status: 'success',
    data: category,
    pagination: null,
  });
};

const updateCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const { name, slug: bodySlug } = req.body;

  const category = await categoryService.updateCategory(slug as string, {
    name,
    slug: bodySlug,
  });

  return res.status(200).json({
    status: 'success',
    data: category,
  });
};

const deleteCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  await categoryService.deleteCategory(slug as string);

  return res.status(200).json({
    status: 'success',
    data: null,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getCategory);
    case 'PUT':
      return validate(req, res, updateCategorySchema, updateCategory);
    case 'DELETE':
      return catchAsync(req, res, deleteCategory);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

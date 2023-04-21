import { NextApiHandler } from 'next';
import slugify from 'slugify';
import { z } from 'zod';

import { validate, catchAsync } from '@/lib/api-middlewares';
import { prisma } from '@/lib/prisma';

const createCategorySchema = z.object({
  name: z.string().nonempty('Name is required'),
});

const getCategories: NextApiHandler = async (_, res) => {
  const categories = await prisma.category.findMany();

  return res.status(200).json({
    status: 'success',
    data: categories,
    pagination: {
      totalCount: categories.length,
      totalPage: 1,
    },
  });
};

const createCategory: NextApiHandler = async (req, res) => {
  const { name } = req.body;

  const slug = slugify(name, { lower: true, trim: true, strict: true });

  const category = await prisma.category.create({
    data: {
      name,
      slug,
    },
  });

  return res.status(200).json({
    status: 'success',
    data: category,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getCategories);
    case 'POST':
      return validate(req, res, createCategorySchema, createCategory);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

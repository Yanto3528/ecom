import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import { categoryInclude } from '@/entities/category.entity';
import { prisma } from '@/lib/prisma';

const updateCategorySchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
});

const getCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const category = await prisma.category.findFirst({
    where: {
      slug: slug as string,
    },
    include: categoryInclude,
  });

  return res.status(200).json({
    status: 'success',
    data: category,
    pagination: null,
  });
};

const updateCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const { name, slug: bodySlug } = req.body;

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

  return res.status(200).json({
    status: 'success',
    data: category,
  });
};

const deleteCategory: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  await prisma.category.delete({
    where: {
      slug: slug as string,
    },
  });

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

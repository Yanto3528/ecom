import { NextApiHandler } from 'next';
import slugify from 'slugify';
import { z } from 'zod';

import { productInclude } from '@/entities/product.entity';
import { validate, catchAsync } from '@/lib/api-middlewares';
import { prisma } from '@/lib/prisma';

const createProductSchema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  price: z.number().nonnegative('Price must be greater than 0'),
  quantity: z.number(),
  categoryId: z.number(),
});

const getProducts: NextApiHandler = async (_, res) => {
  const products = await prisma.product.findMany({
    include: productInclude,
  });

  return res.status(200).json({
    status: 'success',
    data: products,
    pagination: {
      totalCount: products.length,
      totalPage: 1,
    },
  });
};

const createProduct: NextApiHandler = async (req, res) => {
  const { name, description, price, quantity, categoryId } = req.body;

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

  return res.status(200).json({
    status: 'success',
    data: product,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getProducts);
    case 'POST':
      return validate(req, res, createProductSchema, createProduct);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

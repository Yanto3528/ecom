import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import productService from '@/api/services/product.service';
import { UpdateProductInput } from '@/api/types/product';

const updateProductSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
  categoryId: z.number().optional(),
});

const getProduct: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const product = await productService.getSingleProduct(slug as string);

  return res.status(200).json({
    status: 'success',
    data: product,
    pagination: null,
  });
};

const updateProduct: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const {
    name,
    slug: bodySlug,
    description,
    price,
    quantity,
    categoryId,
  } = req.body as UpdateProductInput;

  const product = await productService.updateProduct(slug as string, {
    name,
    slug: bodySlug,
    description,
    price,
    quantity,
    categoryId,
  });

  return res.status(200).json({
    status: 'success',
    data: product,
  });
};

const deleteProduct: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  await productService.deleteProduct(slug as string);

  return res.status(200).json({
    status: 'success',
    data: null,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return catchAsync(req, res, getProduct);
    case 'PUT':
      return validate(req, res, updateProductSchema, updateProduct);
    case 'DELETE':
      return catchAsync(req, res, deleteProduct);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

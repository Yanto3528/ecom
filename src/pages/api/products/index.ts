import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate, catchAsync } from '@/api/middlewares';
import productService from '@/api/services/product.service';
import { CreateProductInput } from '@/api/types/product';

const createProductSchema = z.object({
  name: z.string().nonempty('Name is required'),
  description: z.string().nonempty('Description is required'),
  price: z.number().nonnegative('Price must be greater than 0'),
  quantity: z.number(),
  categoryId: z.number(),
});

const getProducts: NextApiHandler = async (_, res) => {
  const products = await productService.getProducts();

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
  const { name, description, price, quantity, categoryId } = req.body as CreateProductInput;

  const product = await productService.createProduct({
    name,
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

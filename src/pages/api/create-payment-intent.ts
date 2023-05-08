import { Product } from '@prisma/client';
import { NextApiHandler } from 'next';
import { getServerSession } from 'next-auth';
import { z } from 'zod';

import { validate } from '@/api/middlewares';
import { authOptions } from '@/lib/next-auth';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

interface CartItem {
  quantity: number;
  productId: number;
}

const createPaymentIntentSchema = z.object({
  items: z.array(z.object({ quantity: z.number(), productId: z.number() })),
});

const getStripePriceFromItems = (items: CartItem[], products: Product[]) => {
  const totalPrice = items.reduce((acc, item) => {
    const product = products.find((productDetails) => productDetails.id === item.productId);
    if (!product) {
      return acc;
    }

    return acc + product.price * item.quantity;
  }, 0);

  return totalPrice * 100;
};

export const createPaymentIntent: NextApiHandler = async (req, res) => {
  const items = req.body.items as CartItem[];
  const session = await getServerSession(req, res, authOptions);

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: items.map((item) => item.productId),
      },
    },
  });

  if (session && !session?.user.stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: session?.user.email || '',
      name: session?.user.name || '',
    });

    session.user.stripeCustomerId = customer.id;
    await prisma.user.update({
      where: { id: session?.user.id },
      data: { stripeCustomerId: customer.id },
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: getStripePriceFromItems(items, products),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
    customer: session?.user.stripeCustomerId || undefined,
    metadata: {
      userId: session?.user.id || null,
      products: JSON.stringify(
        items.map((item) => ({
          quantity: item.quantity,
          productId: item.productId,
        }))
      ),
    },
  });

  res.status(200).json({
    status: 'success',
    data: paymentIntent.client_secret,
  });
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      return validate(req, res, createPaymentIntentSchema, createPaymentIntent);
    default:
      return res.status(405).json({
        status: 'error',
        errors: [{ message: 'Method not allowed' }],
      });
  }
};

export default handler;

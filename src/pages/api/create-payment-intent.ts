import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextApiHandler } from 'next';
import { z } from 'zod';

import { validate } from '@/api/middlewares';
import { stripe } from '@/lib/stripe';
import { Database } from '@/types/database';
import { Product } from '@/types/db-entity';

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

    const totalProductPrice = Number((product.price * item.quantity).toFixed(1));

    return acc + totalProductPrice;
  }, 0);

  return totalPrice * 100;
};

export const createPaymentIntent: NextApiHandler = async (req, res) => {
  const items = req.body.items as CartItem[];
  const supabase = createServerSupabaseClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await supabase
    .from('products')
    .select('*')
    .in(
      'id',
      items.map((item) => item.productId)
    );

  const products = response.data || [];

  if (session && !session?.user.user_metadata.stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: session?.user.user_metadata.email || '',
      name: session?.user.user_metadata.name || '',
    });

    await supabase.auth.updateUser({
      data: {
        stripeCustomerId: customer.id,
      },
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: getStripePriceFromItems(items, products),
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
    customer: session?.user.user_metadata.stripeCustomerId || undefined,
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

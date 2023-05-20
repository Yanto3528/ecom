import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { PAYMENT_STATUS } from '@/constants/common.constants';
import { createServerSupabase } from '@/lib/supabase';
import { OrderItemInsert } from '@/types/db-entity';

interface StripeMetadata {
  userId: string;
  products: string;
}

interface MetadataProduct {
  quantity: number;
  productId: number;
}

export const handlePaymentSucceeded = async (
  event: Stripe.Event,
  { req, res }: { req: NextApiRequest; res: NextApiResponse }
) => {
  const chargeSucceeded = event.data.object as Record<string, any>;
  const metadata = chargeSucceeded.metadata as StripeMetadata;
  const metadataProducts = JSON.parse(metadata.products) as MetadataProduct[];

  const supabase = createServerSupabase({ req, res });

  const response = await supabase
    .from('products')
    .select('*')
    .in(
      'id',
      metadataProducts.map((product) => product.productId)
    );

  const products = response.data || [];

  const { data: order } = await supabase
    .from('orders')
    .insert({
      userId: metadata.userId,
      paymentStatus: PAYMENT_STATUS.COMPLETED,
    })
    .select('*')
    .single();

  if (order) {
    const orderItems: OrderItemInsert[] = [];
    metadataProducts.forEach((product) => {
      const productData = products.find(
        (productDetails) => productDetails.id === product.productId
      );

      if (!productData) {
        return;
      }

      orderItems.push({
        productId: productData.id,
        orderId: order.id,
      });
    });

    await supabase.from('order_items').insert(orderItems);
  }
};

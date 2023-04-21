import Stripe from 'stripe';

import { prisma } from '@/lib/prisma';

interface StripeMetadata {
  userId: string;
  products: string;
}

interface MetadataProduct {
  quantity: number;
  productId: number;
}

export const handleChargeSucceeded = async (event: Stripe.Event) => {
  const chargeSucceeded = event.data.object as Record<string, any>;
  const metadata = chargeSucceeded.metadata as StripeMetadata;
  const metadataProducts = JSON.parse(metadata.products) as MetadataProduct[];

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: metadataProducts.map((product) => product.productId),
      },
    },
  });

  const orderItems: any = [];
  metadataProducts.forEach((product) => {
    const productData = products.find((productDetails) => productDetails.id === product.productId);

    if (!productData) {
      return;
    }

    orderItems.push({
      quantity: product.quantity,
      price: productData?.price || 0,
      name: productData.name,
    });
  });

  await prisma.order.create({
    data: {
      paymentStatus: 'COMPLETED',
      userId: metadata.userId,
      orderItems: {
        createMany: {
          data: orderItems,
        },
      },
    },
  });
};

import { NextApiHandler } from "next";
import { buffer } from "micro";

import { stripe } from "@/lib/stripe";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export const config = { api: { bodyParser: false } };

const handleStripeWebhook: NextApiHandler = async (req, res) => {
  const signature = req.headers["stripe-signature"] as string;
  let event;

  const reqBuffer = await buffer(req);

  try {
    event = stripe.webhooks.constructEvent(
      reqBuffer,
      signature,
      endpointSecret
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "";
    return res.status(400).json({
      status: "error",
      errors: [{ message: `Webhook Error: ${errorMessage}` }],
    });
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSuccedeed = event.data.object;
      console.log("payemntIntentSuccedeed: ", paymentIntentSuccedeed);

      break;
    case "charge.succeeded":
      const chargeSucceeded = event.data.object;
      console.log("chargeSucceeded: ", chargeSucceeded);
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).json({});
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "POST":
      return handleStripeWebhook(req, res);
    default:
      return res.status(405).json({
        status: "error",
        errors: [{ message: "Method not allowed" }],
      });
  }
};

export default handler;

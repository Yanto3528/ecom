import { NextApiHandler } from "next";
import { buffer } from "micro";

import { stripe } from "@/lib/stripe";
import { handleChargeSucceeded } from "@/lib/webhook";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export const config = { api: { bodyParser: false } };

const handleStripeWebhook: NextApiHandler = async (req, res) => {
  const signature = req.headers["stripe-signature"] as string;
  const reqBuffer = await buffer(req);
  let event;

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
    case "charge.succeeded": {
      handleChargeSucceeded(event);
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
      break;
  }

  return res.status(200).json({ received: true });
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

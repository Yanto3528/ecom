import { NextApiHandler } from "next";
import { stripe } from "@/lib/stripe";

export const getClientSecret: NextApiHandler = async (_, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      // foo: "bar",
      // wow: "Hello there",
      products: JSON.stringify([
        { id: 1, name: "Test Project" },
        { id: 2, name: "Test Project 2" },
      ]),
    },
  });

  res.status(200).json({
    status: "success",
    data: paymentIntent.client_secret,
  });
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      return getClientSecret(req, res);
    default:
      return res.status(405).json({
        status: "error",
        errors: [{ message: "Method not allowed" }],
      });
  }
};

export default handler;

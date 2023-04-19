import { NextApiHandler } from "next";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { validate, catchAsync } from "@/lib/api-middlewares";

const updateCollectionSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  products: z.array(z.object({ id: z.number() })).optional(),
});

const getCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const collection = await prisma.collection.findFirst({
    where: {
      slug: slug as string,
    },
    include: {
      products: true,
    },
  });

  return res.status(200).json({
    status: "success",
    data: collection,
    pagination: null,
  });
};

const updateCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;
  const { name, slug: bodySlug, products } = req.body;

  const collection = await prisma.collection.update({
    where: {
      slug: slug as string,
    },
    data: {
      name,
      slug: bodySlug,
      products: {
        set: products,
      },
    },
    include: {
      products: true,
    },
  });

  return res.status(200).json({
    status: "success",
    data: collection,
  });
};

const deleteCollection: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  await prisma.collection.delete({
    where: {
      slug: slug as string,
    },
  });

  return res.status(200).json({
    status: "success",
    data: null,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return catchAsync(req, res, getCollection);
    case "PUT":
      return validate(req, res, updateCollectionSchema, updateCollection);
    case "DELETE":
      return catchAsync(req, res, deleteCollection);
    default:
      return res.status(405).json({
        status: "error",
        errors: [{ message: "Method not allowed" }],
      });
  }
};

export default handler;

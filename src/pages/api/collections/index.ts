import { NextApiHandler } from "next";
import slugify from "slugify";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { validate, catchAsync } from "@/lib/api-middlewares";
import { productInclude } from "@/entities/product.entity";

const createCollectionSchema = z.object({
  name: z.string().nonempty("Name is required"),
  products: z.array(z.object({ id: z.number() })),
});

const getCollections: NextApiHandler = async (_, res) => {
  const collections = await prisma.collection.findMany({
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return res.status(200).json({
    status: "success",
    data: collections,
    pagination: {
      totalCount: collections.length,
      totalPage: 1,
    },
  });
};

const createCollection: NextApiHandler = async (req, res) => {
  const { name, products } = req.body;

  const slug = slugify(name, { lower: true, trim: true, strict: true });

  const collection = await prisma.collection.create({
    data: {
      name,
      slug,
      products: {
        connect: products,
      },
    },
    include: {
      products: {
        include: productInclude,
      },
    },
  });

  return res.status(200).json({
    status: "success",
    data: collection,
  });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return catchAsync(req, res, getCollections);
    case "POST":
      return validate(req, res, createCollectionSchema, createCollection);
    default:
      return res.status(405).json({
        status: "error",
        errors: [{ message: "Method not allowed" }],
      });
  }
};

export default handler;

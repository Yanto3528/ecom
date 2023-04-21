import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const getErrors = (error: unknown) => {
  const defaultErrorMessage =
    error instanceof Error ? error.message : 'Something went wrong. Please try again later.';

  let errors: z.ZodIssue[] | { message: string }[] = [{ message: defaultErrorMessage }];

  if (error instanceof z.ZodError) {
    errors = error.errors;
  }

  return errors;
};

export const catchAsync = async (req: NextApiRequest, res: NextApiResponse, fn: NextApiHandler) => {
  try {
    await fn(req, res);
  } catch (error) {
    const errors = getErrors(error);

    return res.status(400).json({
      status: 'error',
      errors,
    });
  }
};

export const validate = async (
  req: NextApiRequest,
  res: NextApiResponse,
  schema: z.ZodSchema,
  apiHandler: NextApiHandler
) => {
  try {
    await schema.parseAsync(req.body);
    await apiHandler(req, res);
  } catch (error) {
    const errors = getErrors(error);

    return res.status(400).json({
      status: 'error',
      errors,
    });
  }
};

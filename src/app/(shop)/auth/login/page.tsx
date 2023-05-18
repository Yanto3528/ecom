'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input, InputPassword, Form, Button, Divider } from '@/components/ui';
import { useSignInCredentialsMutation } from '@/hooks/auth';

interface FormValues {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email('Email must be a valid email address').nonempty('Email is required'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSignInWithGoogle = () => {
    signIn('google');
  };

  // const { mutate, isLoading } = useSignInCredentialsMutation();

  const onSubmit = async (data: FormValues) => {
    console.log('data: ', data);
  };

  return (
    <div className="container flex flex-col items-center justify-center pb-10">
      <div className="max-w-[20rem]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Sign In</h1>
          <p className="mx-auto max-w-xs">
            Sign in now and receive special discount code just for you
          </p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
          <div>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Input
              type="text"
              id="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <div>
            <Form.Label htmlFor="password">Password</Form.Label>
            <InputPassword
              error={errors.password?.message}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
        <div className="relative my-8 w-full">
          <Divider />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-xs font-medium uppercase text-gray-400">
            Or
          </p>
        </div>
        <Button variant="social" type="button" className="w-full" onClick={onSignInWithGoogle}>
          <Image
            src="/images/google-signin-logo.png"
            alt="signin with google"
            width={20}
            height={20}
          />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

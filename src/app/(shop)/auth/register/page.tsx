'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Input, InputPassword, Form, Button, Divider } from '@/components/ui';
import { useSupabaseContext } from '@/contexts/auth.context';
import { useSignUpCredentialsMutation } from '@/hooks/auth';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string(),
  email: z.string().email('Email must be a valid email address').nonempty('Email is required'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
});

export default function Login() {
  const { supabase } = useSupabaseContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: onSignUp, isLoading } = useSignUpCredentialsMutation();

  const onSignInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const onSubmit = async (data: FormValues) => {
    const { error } = await onSignUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
          email: data.email,
          email_verified: true,
          avatar_url: '',
          role: 'user',
        },
      },
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    router.push('/');
  };

  return (
    <div className="container flex flex-col items-center justify-center pb-10">
      <div className="max-w-[20rem]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Sign Up</h1>
          <p className="mx-auto max-w-xs">Sign up now to purchase any items in your cart</p>
        </div>
        <Button variant="social" type="button" className="w-full" onClick={onSignInWithGoogle}>
          <Image
            src="/images/google-signin-logo.png"
            alt="signin with google"
            width={20}
            height={20}
          />
          Sign up with Google
        </Button>
        <div className="relative my-8 w-full">
          <Divider />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-xs font-medium uppercase text-gray-400">
            or
          </p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
          <Input
            type="text"
            id="name"
            placeholder="Full name"
            label="Full name"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            label="Email"
            error={errors.email?.message}
            {...register('email')}
          />
          <InputPassword
            error={errors.password?.message}
            id="password"
            label="Password"
            placeholder="Password"
            {...register('password')}
          />
          <Button type="submit" loading={isLoading}>
            Sign up
          </Button>
        </Form>
        <p className="mt-4 text-center text-xs text-gray-500">
          Already have an account?{' '}
          <Link
            className="text-primary hover:underline hover:underline-offset-2"
            href="/auth/login"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import { Input, InputPassword, Form, Button } from "@/components/ui";
// import { useSignInCredentialsMutation } from "@/hooks/auth";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

// interface FormValues {
//   email: string;
//   password: string;
// }

// const schema = z.object({
//   email: z
//     .string()
//     .email("Email must be a valid email address")
//     .nonempty("Email is required"),
//   password: z
//     .string()
//     .nonempty("Password is required")
//     .min(6, "Password must be at least 6 characters")
//     .max(20, "Password must be at most 20 characters"),
// });

export default function Login() {
  // const { data } = useSession();

  // console.log("data: ", data);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   resolver: zodResolver(schema),
  // });

  const onSignInWithGoogle = () => {
    signIn("google");
  };

  // const { mutate, isLoading } = useSignInCredentialsMutation();

  // const onSubmit = async (data: FormValues) => {
  //   mutate(data);
  // };

  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="font-bold text-3xl mb-2">Sign In</h1>
        <p className="max-w-xs mx-auto">
          Sign in now and receive special discount code just for you
        </p>
      </div>
      <button onClick={onSignInWithGoogle}>
        <Image
          src="/images/google-signin-button.png"
          alt="signin with google"
          width={191}
          height={46}
        />
      </button>
      {/* <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-[20rem]"
      >
        <div>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div>
          <Form.Label htmlFor="password">Password</Form.Label>
          <InputPassword
            id="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <Button loading={isLoading}>Submit</Button>
      </Form> */}
    </div>
  );
}

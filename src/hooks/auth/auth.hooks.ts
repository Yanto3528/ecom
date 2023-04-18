import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

interface SignInCredentialsPayload {
  email: string;
  password: string;
}

export const useSignInCredentialsMutation = () => {
  const mutation = useMutation((payload: SignInCredentialsPayload) => {
    return signIn("credentials", {
      ...payload,
      callbackUrl: "/",
    });
  });

  return mutation;
};

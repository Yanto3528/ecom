namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    readonly STRIPE_SECRET_KEY: string;
    readonly STRIPE_ENDPOINT_SECRET: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
  }
}

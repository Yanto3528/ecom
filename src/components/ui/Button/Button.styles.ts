import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 focus:ring-2 outline-none transition-all disabled:opacity-70 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white enabled:hover:bg-primary-700-700 enabled:active:bg-primary-800",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "px-6 py-2 rounded-md font-semibold w-full focus:ring-2 outline-none transition-all disabled:opacity-70 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white enabled:hover:bg-blue-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

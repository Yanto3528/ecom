import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-full focus:ring-2 outline-none transition-all disabled:opacity-70 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-white enabled:hover:bg-blue-700 enabled:active:bg-blue-800",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

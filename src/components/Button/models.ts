import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const buttonVariants = cva("", {
  variants: {
    size: {
      sm: "h-7",
      md: "h-9",
      lg: "h-11",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

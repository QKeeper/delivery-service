import { ButtonProps, buttonVariants } from "./models";
import cn from "clsx";

function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-lg bg-indigo-500 text-neutral-50 ring-0 ring-indigo-500/50 duration-100 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4",
        buttonVariants({ ...rest }),
        className,
      )}
    />
  );
}

export default Button;

import { FormFieldProps } from "./models";
import cn from "clsx";

function FormField({
  register,
  error,
  errorMsg,
  label,
  className,
  children,
  ...rest
}: FormFieldProps) {
  return (
    <label className="relative w-full">
      <p className="mb-1 text-sm font-semibold">{label}</p>
      <input
        {...register}
        {...rest}
        className={cn(
          "h-11 w-full rounded-lg border px-3 ring-0 duration-100 focus-visible:outline-none focus-visible:ring-4",
          error
            ? "border-red-400 bg-red-50 ring-red-300/50"
            : "ring-indigo-300/50 focus:border-indigo-400",
          className,
        )}
      />
      {error && errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
      {children}
    </label>
  );
}

export default FormField;

import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ComponentProps } from "react";

export interface SignInProps {
  register?: boolean;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface RegisterInputs {
  email: string;
  name: string;
  surname: string;
  password: string;
}

export interface FormFieldProps extends ComponentProps<"input"> {
  label?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  errorMsg?: string;
}

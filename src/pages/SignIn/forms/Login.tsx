import { useForm } from "react-hook-form";
import { RegisterInputs } from "./models";
import FormField from "./FormField";
import { PATTERNS } from "../../../utils/patterns";
import Button from "../../../components/Button";
import { API } from "../../../api";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit = handleSubmit((data) => API.User.login(data));
  const [viewPass, setViewPass] = useState(false);

  return (
    <form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
      <h1 className="text-2xl font-medium">Вход</h1>

      <FormField
        autoFocus
        label="Почта"
        register={register("email", {
          pattern: PATTERNS.email,
          required: true,
        })}
        error={errors.email}
        errorMsg="Почта введена неправильно"
      />

      <FormField
        label="Пароль"
        type={viewPass ? "text" : "password"}
        register={register("password", {
          minLength: 8,
          maxLength: 128,
          required: true,
        })}
        error={errors.password}
        errorMsg="Минимальная длина пароля 8 символов"
      >
        <button
          type="button"
          onClick={() => setViewPass(!viewPass)}
          className="absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-lg p-1 hover:bg-indigo-50 hover:text-indigo-600 focus:bg-indigo-50 focus:text-indigo-600 focus-visible:outline-none"
          aria-label={viewPass ? "Скрыть пароль" : "Показать пароль"}
        >
          {viewPass ? (
            <EyeOffIcon strokeWidth={1} />
          ) : (
            <EyeIcon strokeWidth={1} />
          )}
        </button>
      </FormField>

      <Button type="submit" size="lg">
        Войти
      </Button>
      <p className="text-center text-sm text-neutral-500">
        Ещё нет аккаунта?{" "}
        <Link to="/register" className="underline">
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
}

export default Login;

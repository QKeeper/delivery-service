import { useForm } from "react-hook-form";
import { RegisterInputs } from "./models";
import { PATTERNS } from "../../../utils/patterns";
import Button from "../../../components/Button";
import { API } from "../../../api";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import FormField from "./FormField";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const [viewPass, setViewPass] = useState(false);

  const onSubmit = handleSubmit((data) => API.User.register(data));

  return (
    <form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
      <h1 className="text-2xl font-medium">Регистрация</h1>
      <div className="flex justify-between gap-8">
        <FormField
          autoFocus
          label="Имя"
          register={register("name", { required: true })}
          error={errors.name}
        />
        <FormField
          label="Фамилия"
          register={register("surname", { required: true })}
          error={errors.surname}
        />
      </div>

      <FormField
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
        >
          {viewPass ? (
            <EyeIcon strokeWidth={1} />
          ) : (
            <EyeOffIcon strokeWidth={1} />
          )}
        </button>
      </FormField>

      <Button type="submit" size="lg">
        Создать аккаунт
      </Button>

      <p className="text-center text-sm text-neutral-500">
        Уже есть аккаунт?{" "}
        <Link to="/login" className="underline">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;

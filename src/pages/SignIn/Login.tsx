import { useForm } from "react-hook-form";
import { RegisterInputs } from "./models";
import FormField from "./FormField";
import { PATTERNS } from "../../utils/patterns";
import Button from "../../components/Button";
import { API } from "../../api";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit = handleSubmit((data) => API.User.login(data));

  return (
    <div className="my-8 flex items-center justify-center">
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
          type="password"
          register={register("password", {
            minLength: 8,
            maxLength: 128,
            required: true,
          })}
          error={errors.password}
          errorMsg="Минимальная длина пароля 8 символов"
        />

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
    </div>
  );
}

export default Login;

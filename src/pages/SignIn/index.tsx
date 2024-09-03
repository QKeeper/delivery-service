import Login from "./forms/Login";
import Register from "./forms/Register";
import { SignInProps } from "./forms/models";

function SignIn({ register }: SignInProps) {
  return (
    <div className="my-8 flex items-center justify-center">
      {register ? <Register /> : <Login />}
    </div>
  );
}

export default SignIn;

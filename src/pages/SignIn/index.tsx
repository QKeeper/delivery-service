import Login from "./Login";
import { SignInProps } from "./models";
import Register from "./Register";

const SignIn = ({ register }: SignInProps) =>
  register ? <Register /> : <Login />;

export default SignIn;

import axios from "axios";
import { LoginInputs, RegisterInputs } from "./pages/SignIn/models";

export class API {
  private static instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    withCredentials: true,
  });

  public static User = {
    register: (data: RegisterInputs) => {
      API.instance.post("/register", { data });
    },
    login: (data: LoginInputs) => {
      API.instance.post("/login", { data });
    },
  };
}

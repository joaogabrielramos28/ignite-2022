import { api } from "@infra/http/api";
import { LoginRequestDTO } from "./dtos/requests/LoginRequestDTO";
import { RegisterRequestDTO } from "./dtos/requests/RegisterRequestDTO";

export class AuthService {
  private routes = {
    login: "/sessions/",
    register: "/users/",
  };

  public async login({ email, password }: LoginRequestDTO) {
    try {
      const response = await api.post(this.routes.login, {
        email,
        password,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  public async register(payload: RegisterRequestDTO) {
    try {
      const response = await api.post(this.routes.register, payload);

      return response;
    } catch (error) {
      throw error;
    }
  }
}

import { api } from "@infra/http/api";
import { LoginRequestDTO } from "./dtos/requests/LoginRequestDTO";
import { RegisterRequestDTO } from "./dtos/requests/RegisterRequestDTO";
import { LoginResponseDTO } from "./dtos/response/LoginResponseDTO";

export class AuthService {
  private routes = {
    login: "/sessions/",
    register: "/users/",
  };

  public async login({
    email,
    password,
  }: LoginRequestDTO): Promise<LoginResponseDTO> {
    try {
      const response = await api.post<LoginResponseDTO>(this.routes.login, {
        email,
        password,
      });

      return response.data;
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

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

  public async register(payload: globalThis.FormData) {
    try {
      const response = await api.post(this.routes.register, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  public async refreshToken(refreshToken: string): Promise<{ token: string }> {
    try {
      const response = await api.post("/refresh-token", { refreshToken });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

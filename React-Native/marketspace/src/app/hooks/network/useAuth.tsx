import { ReactNode, createContext, useContext, useState } from "react";
import { IUser } from "@model/User";
import { api } from "@infra/http/api";
import { AuthService } from "@infra/auth";
import { LoginRequestDTO } from "@infra/auth/dtos/requests/LoginRequestDTO";
import { AppError } from "@infra/http/AppError";
import { RegisterRequestDTO } from "@infra/auth/dtos/requests/RegisterRequestDTO";

type AuthContextType = {
  user: IUser | null;
  login: ({ email, password }: LoginRequestDTO) => Promise<void>;
  register: (payload: globalThis.FormData) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const authService = new AuthService();

  const login = async ({ email, password }: LoginRequestDTO) => {
    try {
      const data = await authService.login({
        email,
        password,
      });
      api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (payload: globalThis.FormData) => {
    try {
      console.log(payload);

      const { data } = await authService.register(payload);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

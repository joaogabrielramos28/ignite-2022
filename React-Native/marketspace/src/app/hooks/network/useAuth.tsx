import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "@model/User";
import { api } from "@infra/http/api";
import { AuthService } from "@infra/auth";
import { LoginRequestDTO } from "@infra/auth/dtos/requests/LoginRequestDTO";

import {
  getUserFromStorage,
  removeUserFromStorage,
  updateUserToStorage,
} from "@storage/User";
import {
  getTokenFromStorage,
  removeTokenFromStorage,
  updateTokenToStorage,
} from "@storage/Auth";
import { loadingStates, loadingStatesEnum } from "@ts/types/loading";

type AuthContextType = {
  user: IUser | null;
  login: ({ email, password }: LoginRequestDTO) => Promise<void>;
  loadingUserData: boolean;
  register: (payload: globalThis.FormData) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const authService = new AuthService();
  const [loadingUserData, setLoadingUserData] = useState<loadingStates>(
    loadingStatesEnum.STAND_BY
  );

  const login = async ({ email, password }: LoginRequestDTO) => {
    try {
      const data = await authService.login({
        email,
        password,
      });
      api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
      setUser(data.user);
      updateUserToStorage(data.user);
      updateTokenToStorage({
        token: data.token,
        refresh_token: data["refresh-token"],
      });
    } catch (error) {
      throw error;
    }
  };

  const register = async (payload: globalThis.FormData) => {
    try {
      await authService.register(payload);
    } catch (error) {
      throw error;
    }
  };

  const loadUser = async () => {
    try {
      setLoadingUserData(loadingStatesEnum.PENDING);
      const token = await getTokenFromStorage();
      const userStorage = await getUserFromStorage();

      if (token && userStorage) {
        api.defaults.headers["Authorization"] = `Bearer ${token.token}`;
        setUser(userStorage);
      }
    } catch {
      setUser(null);
    } finally {
      setLoadingUserData(loadingStatesEnum.DONE);
    }
  };

  const logout = async () => {
    try {
      await removeUserFromStorage();
      await removeTokenFromStorage();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        loadingUserData: loadingUserData === loadingStatesEnum.PENDING,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

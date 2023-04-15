import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "@storage/storageAuthToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import React, { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: UserDTO | null;
  isLoadingUserData: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  const [isLoadingUserData, setIsLoadingUserData] = useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserData(true);
      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserData(false);
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", {
        email,
        password,
      });

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token);
        await userAndTokenUpdate(data.user, data.token);
      }
    } catch (err) {
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setIsLoadingUserData(true);

      setUser(null);

      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserData(false);
    }
  };

  const loadUserData = async () => {
    try {
      setIsLoadingUserData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();
      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserData(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isLoadingUserData, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

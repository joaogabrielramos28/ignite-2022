import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", {
        email,
        password,
      });

      if (data.user) {
        setUser(data.user);
        await storageUserSave(data.user);
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
    } catch (err) {
      throw err;
    } finally {
      setIsLoadingUserData(false);
    }
  };

  const loadUserData = async () => {
    try {
      const user = await storageUserGet();
      if (user) {
        setUser(user);
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

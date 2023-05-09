import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "./config";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
};

export const getTokenFromStorage =
  async (): Promise<StorageAuthTokenProps | null> => {
    const response = await AsyncStorage.getItem(StorageKeys.AUTH_TOKEN_STORAGE);

    const { token, refresh_token }: StorageAuthTokenProps = response
      ? JSON.parse(response)
      : null;

    return {
      token,
      refresh_token,
    };
  };

export const updateTokenToStorage = async ({
  refresh_token,
  token,
}: StorageAuthTokenProps) => {
  console.log("updateTokenToStorage", { refresh_token, token });

  await AsyncStorage.setItem(
    StorageKeys.AUTH_TOKEN_STORAGE,
    JSON.stringify({ refresh_token, token })
  );
};

export const removeTokenFromStorage = async () => {
  await AsyncStorage.removeItem(StorageKeys.AUTH_TOKEN_STORAGE);
};

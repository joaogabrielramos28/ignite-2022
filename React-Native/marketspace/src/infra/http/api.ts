import axios, { AxiosError, AxiosInstance } from "axios";
import { AppError } from "./AppError";
import { getTokenFromStorage, updateTokenToStorage } from "@storage/Auth";
import { AuthService } from "@infra/auth";

type logout = () => void;

type PromiseType = {
  onSuccess: (toke: string) => void;
  onFailure: (error: AxiosError) => void;
};

type APIINstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (logout: logout) => void;
};

const authService = new AuthService();

const api = axios.create({
  baseURL: "http://192.168.0.10:3333",
}) as APIINstanceProps;

let failedQueue: Array<PromiseType> = [];
let isRefreshing = false;

api.registerInterceptTokenManager = (logout) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError?.response?.status === 401) {
        if (
          requestError.response.data?.message === "token.expired" ||
          requestError.response.data?.message === "token.invalid"
        ) {
          const tokens = await getTokenFromStorage();

          if (!tokens?.refresh_token) {
            logout();
            return Promise.reject(requestError);
          }

          const originalRequestConfig = requestError.config;

          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({
                onSuccess: (token: string) => {
                  originalRequestConfig.headers = {
                    Authorization: `Bearer ${token}`,
                  };
                  resolve(api(originalRequestConfig));
                },
                onFailure: (error: AxiosError) => {
                  reject(error);
                },
              });
            });
          }

          isRefreshing = true;

          return new Promise(async (resolve, reject) => {
            try {
              const { token } = await authService.refreshToken(
                tokens.refresh_token
              );

              await updateTokenToStorage({
                refresh_token: tokens.refresh_token,
                token,
              });

              if (originalRequestConfig.data) {
                originalRequestConfig.data = JSON.parse(
                  originalRequestConfig.data
                );
              }

              originalRequestConfig.headers = {
                Authorization: `Bearer ${token}`,
              };

              api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

              failedQueue.forEach((request) => {
                request.onSuccess(token);
              });

              resolve(api(originalRequestConfig));
            } catch (err: any) {
              failedQueue.forEach((request) => {
                request.onFailure(err);
              });

              logout();
              reject(err);
            } finally {
              isRefreshing = false;
              failedQueue = [];
            }
          });
        }
        logout();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(requestError);
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };

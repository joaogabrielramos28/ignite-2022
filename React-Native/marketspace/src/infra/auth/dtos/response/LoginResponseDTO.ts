import { IUser } from "@model/User";

export interface LoginResponseDTO {
  token: string;
  refresh_token: string;
  user: IUser;
}

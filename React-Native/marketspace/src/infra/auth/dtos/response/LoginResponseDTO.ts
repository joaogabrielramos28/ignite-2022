import { IUser } from "@model/User";

export interface LoginResponseDTO {
  token: string;
  "refresh-token": string;
  user: IUser;
}

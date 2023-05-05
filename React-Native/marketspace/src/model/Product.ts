import { IUser } from "./User";

export interface IProduct {
  id: string;
  accept_trade: boolean;
  description: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  price: number;
  payment_methods: PaymentMethods[];
  product_images: ProductImages[];
  user: Omit<IUser, "id" | "email">;
  user_id: string;
}

type PaymentMethods = {
  key: string;
  name: string;
};

type ProductImages = {
  path: string;
  id: string;
};

export interface CreateProductRequestDTO {
  name: string;
  description: string;
  is_new: boolean;
  accept_trade: boolean;
  price: number;
  payment_methods: string[];
}

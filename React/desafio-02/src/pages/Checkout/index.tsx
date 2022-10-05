import { useCartContext } from "../../contexts/CartContext/CartContext";
import { Form } from "./components/Form";
import { OrderDetails } from "./components/OrderDetails";
import { CheckoutContainer } from "./styles";

import * as zod from "zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().nullable(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentType: zod.string(),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export const Checkout: React.FC = () => {
  const { resetCart } = useCartContext();
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      paymentType: "",
    },
  });

  const { handleSubmit } = checkoutForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: CheckoutFormData) {
    resetCart();
    navigate("/order-confirm", {
      state: data,
    });
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...checkoutForm}>
        <Form />
        <OrderDetails />
      </FormProvider>
    </CheckoutContainer>
  );
};

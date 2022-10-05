import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";
import { useCartContext } from "../../../../contexts/CartContext/CartContext";
import { Payment } from "./components/Payment";
import { RegisterAddress } from "./components/RegisterAddress";

import { FormContainer, FormTitle } from "./styles";

export const Form: React.FC = () => {
  return (
    <FormContainer>
      <FormTitle>Complete seu pedido</FormTitle>

      <RegisterAddress />
      <Payment />
    </FormContainer>
  );
};

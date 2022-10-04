import { Form } from "./Form";
import { OrderDetails } from "./Form/components/OrderDetails";
import { CheckoutContainer } from "./styles";

export const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <Form />
      <OrderDetails />
    </CheckoutContainer>
  );
};

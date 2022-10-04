import { Form } from "./components/Form";
import { OrderDetails } from "./components/OrderDetails";
import { CheckoutContainer } from "./styles";

export const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <Form />
      <OrderDetails />
    </CheckoutContainer>
  );
};

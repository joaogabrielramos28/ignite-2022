import { OrderItem } from "./components/OrderItem";
import { OrderDetailsContainer } from "./styles";

export const OrderDetails: React.FC = () => {
  return (
    <OrderDetailsContainer>
      <OrderItem />
      <OrderItem />
    </OrderDetailsContainer>
  );
};

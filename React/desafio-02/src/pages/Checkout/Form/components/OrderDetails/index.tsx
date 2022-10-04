import { OrderItem } from "./components/OrderItem";
import {
  ConfirmButton,
  OrderDetailsContainer,
  OrderDetailsWrapper,
  OrderTotalDetails,
  OrderTotalDetailsTotal,
  OrderTotalWrapper,
  Title,
} from "./styles";

export const OrderDetails: React.FC = () => {
  return (
    <OrderDetailsContainer>
      <Title>Cafés selecionados</Title>

      <OrderDetailsWrapper>
        <OrderItem />
        <OrderItem />
        <OrderTotalWrapper>
          <OrderTotalDetails>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </OrderTotalDetails>
          <OrderTotalDetails>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </OrderTotalDetails>
          <OrderTotalDetailsTotal>
            <span>Total</span>
            <span>R$ 33,20</span>
          </OrderTotalDetailsTotal>
        </OrderTotalWrapper>

        <ConfirmButton>confirmar pedido</ConfirmButton>
      </OrderDetailsWrapper>
    </OrderDetailsContainer>
  );
};

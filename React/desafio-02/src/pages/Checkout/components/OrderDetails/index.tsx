import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext/CartContext";
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
  const { cart } = useCartContext();

  return (
    <OrderDetailsContainer>
      <Title>Cafés selecionados</Title>

      <OrderDetailsWrapper>
        {cart.cart.map((item) => (
          <OrderItem coffee={item} />
        ))}

        <OrderTotalWrapper>
          <OrderTotalDetails>
            <span>Total de itens</span>
            <span>
              {cart.total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </OrderTotalDetails>
          <OrderTotalDetails>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </OrderTotalDetails>
          <OrderTotalDetailsTotal>
            <span>Total</span>
            <span>
              {(cart.total + 3.5).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </OrderTotalDetailsTotal>
        </OrderTotalWrapper>

        <ConfirmButton>confirmar pedido</ConfirmButton>
      </OrderDetailsWrapper>
    </OrderDetailsContainer>
  );
};

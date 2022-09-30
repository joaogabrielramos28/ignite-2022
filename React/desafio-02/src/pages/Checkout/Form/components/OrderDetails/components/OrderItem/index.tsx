import { Minus, Plus, Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import {
  Counter,
  CounterButton,
  OrderItemActions,
  OrderItemContainer,
  OrderItemContent,
  OrderItemName,
  OrderItemPhoto,
  OrderItemPrice,
  Quantity,
  RemoveButton,
} from "./styles";

export const OrderItem: React.FC = () => {
  const { color } = useTheme();
  return (
    <OrderItemContainer>
      <OrderItemPhoto src={"/coffee/Americano.png"} />
      <OrderItemContent>
        <OrderItemName>Expresso Americano</OrderItemName>
        <OrderItemActions>
          <Counter>
            <CounterButton onClick={() => {}}>
              <Minus size={14} />
            </CounterButton>

            <Quantity>1</Quantity>
            <CounterButton onClick={() => {}}>
              <Plus size={14} />
            </CounterButton>
          </Counter>

          <RemoveButton>
            <Trash size={16} color={color.purple} /> Remover
          </RemoveButton>
        </OrderItemActions>
      </OrderItemContent>
      <OrderItemPrice>R$ 9,90</OrderItemPrice>
    </OrderItemContainer>
  );
};

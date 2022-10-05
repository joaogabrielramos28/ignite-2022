import { Minus, Plus, Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useCartContext } from "../../../../../../contexts/CartContext/CartContext";
import { CoffeeCart } from "../../../../../../reducers/cart/reducer";
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

interface OrderItemProps {
  coffee: CoffeeCart;
}

export const OrderItem: React.FC<OrderItemProps> = ({
  coffee,
}: OrderItemProps) => {
  const { removeCoffeeFromCart, changeCoffeeQuantity } = useCartContext();

  const { color } = useTheme();
  const { count, name, image, price } = coffee;

  const handleRemoveFromCart = () => {
    removeCoffeeFromCart(coffee);
  };

  const handleChangeCoffeeQuantity = (type: "increment" | "decrement") => {
    changeCoffeeQuantity(coffee, type);
  };
  return (
    <OrderItemContainer>
      <OrderItemPhoto src={`/coffee/${image}`} />
      <OrderItemContent>
        <OrderItemName>{name}</OrderItemName>
        <OrderItemActions>
          <Counter>
            <CounterButton
              onClick={() => handleChangeCoffeeQuantity("decrement")}
              disabled={count === 1}
            >
              <Minus size={14} />
            </CounterButton>

            <Quantity>{count}</Quantity>
            <CounterButton
              onClick={() => handleChangeCoffeeQuantity("increment")}
            >
              <Plus size={14} />
            </CounterButton>
          </Counter>

          <RemoveButton onClick={handleRemoveFromCart}>
            <Trash size={16} color={color.purple} /> Remover
          </RemoveButton>
        </OrderItemActions>
      </OrderItemContent>
      <OrderItemPrice>
        {price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </OrderItemPrice>
    </OrderItemContainer>
  );
};

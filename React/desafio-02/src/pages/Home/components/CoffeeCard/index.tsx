import {
  AddToCart,
  CoffeeCardContainer,
  CoffeeCountWrapper,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeImage,
  CoffeeName,
  CoffeePrice,
  CoffeePriceAdornment,
  CoffeeType,
  CoffeeTypeWrapper,
  Counter,
  CounterButton,
  Quantity,
} from "./styles";

import CoffeeImg from "../../../../assets/Americano.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useState } from "react";

interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  image: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeProps> = ({ coffee }: CoffeeProps) => {
  const { name, description, image, price, tags } = coffee;
  const { color } = useTheme();
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  const handleIncrement = () => setCoffeeQuantity((prevState) => prevState + 1);
  const handleDecrement = () => setCoffeeQuantity((prevState) => prevState - 1);

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={`/coffee/${coffee.image}`} />
      <CoffeeTypeWrapper>
        {tags.map((tag) => (
          <CoffeeType>{tag}</CoffeeType>
        ))}
      </CoffeeTypeWrapper>
      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeFooter>
        <CoffeePrice>
          <CoffeePriceAdornment>R$</CoffeePriceAdornment>

          {String(price).padEnd(4, "0")}
        </CoffeePrice>

        <CoffeeCountWrapper>
          <Counter>
            <CounterButton onClick={handleDecrement}>
              <Minus size={14} />
            </CounterButton>

            <Quantity>{coffeeQuantity}</Quantity>
            <CounterButton onClick={handleIncrement}>
              <Plus size={14} />
            </CounterButton>
          </Counter>
          <AddToCart>
            <ShoppingCart weight="fill" size={22} color={color.white} />
          </AddToCart>
        </CoffeeCountWrapper>
      </CoffeeFooter>
    </CoffeeCardContainer>
  );
};

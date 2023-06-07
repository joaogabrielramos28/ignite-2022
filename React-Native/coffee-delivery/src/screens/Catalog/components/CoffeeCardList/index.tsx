import React from "react";
import {
  Container,
  Description,
  Image,
  InfoCoffee,
  Name,
  Price,
  PriceContainer,
  Symbol,
} from "./styles";
import Americano from "../../../../assets/americano.png";
import { View } from "react-native";

type CoffeeCardListProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export function CoffeeCardList({
  image,
  name,
  price,
  description,
}: CoffeeCardListProps) {
  return (
    <Container>
      <View>
        <Image source={image} />
      </View>

      <InfoCoffee>
        <Name>{name}</Name>
        <Description>{description}</Description>

        <PriceContainer>
          <Symbol>R$</Symbol>
          <Price>{price}</Price>
        </PriceContainer>
      </InfoCoffee>
    </Container>
  );
}

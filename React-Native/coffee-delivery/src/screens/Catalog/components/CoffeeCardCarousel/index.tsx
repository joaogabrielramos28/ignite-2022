import React from "react";
import {
  CoffeeImage,
  Container,
  Description,
  InfoCard,
  Name,
  Price,
  PriceContainer,
  Symbol,
  TagContainer,
  TagText,
} from "./styles";

import Americano from "../../../../assets/americano.png";
import { CarouselItem } from "../../../../data/types";

type CoffeeCardCarouselProps = {
  goToDetails: () => void;
  item: CarouselItem;
};

export function CoffeeCardCarousel({
  item,
  goToDetails,
}: CoffeeCardCarouselProps) {
  return (
    <Container onPress={goToDetails}>
      <CoffeeImage source={item.image} />
      <TagContainer>
        <TagText>{item.type}</TagText>
      </TagContainer>

      <InfoCard>
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
      </InfoCard>

      <PriceContainer>
        <Symbol>R$</Symbol>
        <Price>{item.price}</Price>
      </PriceContainer>
    </Container>
  );
}

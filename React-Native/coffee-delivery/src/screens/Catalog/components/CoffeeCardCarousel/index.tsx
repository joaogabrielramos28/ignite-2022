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

export function CoffeeCardCarousel() {
  return (
    <Container>
      <CoffeeImage source={Americano} />
      <TagContainer>
        <TagText>Tradicional</TagText>
      </TagContainer>

      <InfoCard>
        <Name>Latte</Name>
        <Description>
          Café expresso com o dobro de leite e espuma cremosa
        </Description>
      </InfoCard>

      <PriceContainer>
        <Symbol>R$</Symbol>
        <Price>9,90</Price>
      </PriceContainer>
    </Container>
  );
}

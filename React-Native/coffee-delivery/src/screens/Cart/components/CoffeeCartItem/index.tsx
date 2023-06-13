import React from "react";
import {
  CoffeeInfo,
  CoffeeName,
  CoffeePrice,
  CoffeeQuantityContainer,
  CoffeeRow,
  CoffeeSize,
  Container,
  Footer,
  Image,
  ImageContainer,
  Quantity,
  RemoveButton,
} from "./styles";

import Coffee from "../../../../assets/arabe.png";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Minus, Plus, Trash } from "phosphor-react-native";

export function CoffeeCartItem() {
  const { colors } = useTheme();
  return (
    <Container>
      <ImageContainer>
        <Image source={Coffee} />
      </ImageContainer>

      <CoffeeInfo>
        <CoffeeRow>
          <CoffeeName>Irlandês</CoffeeName>
          <CoffeePrice>R$ 9,90</CoffeePrice>
        </CoffeeRow>
        <CoffeeSize>227ml</CoffeeSize>
        <Footer>
          <CoffeeQuantityContainer>
            <TouchableOpacity>
              <Minus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>
            <Quantity>1</Quantity>
            <TouchableOpacity>
              <Plus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>
          </CoffeeQuantityContainer>

          <RemoveButton>
            <Trash size={16} weight="bold" color={colors.purple} />
          </RemoveButton>
        </Footer>
      </CoffeeInfo>
    </Container>
  );
}

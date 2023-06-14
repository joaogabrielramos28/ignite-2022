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
import { ItemCart } from "../../../../hooks/useCart";
import { carouselData } from "../../../../data/carousel";

type CoffeeCartItemProps = {
  item: ItemCart;
  onRemoveQuantity: () => void;
  onDelete: () => void;
  onAddQuantity: () => void;
};

export function CoffeeCartItem({
  item,
  onRemoveQuantity,
  onDelete,
  onAddQuantity,
}: CoffeeCartItemProps) {
  const { colors } = useTheme();

  const image = carouselData.find((coffee) => coffee.id === item.id);
  return (
    <Container>
      <ImageContainer>
        <Image source={image?.image} />
      </ImageContainer>

      <CoffeeInfo>
        <CoffeeRow>
          <CoffeeName>{item.name}</CoffeeName>
          <CoffeePrice>R$ {item.price.toFixed(2)}</CoffeePrice>
        </CoffeeRow>
        <CoffeeSize>{item.size}ml</CoffeeSize>
        <Footer>
          <CoffeeQuantityContainer>
            <TouchableOpacity onPress={onRemoveQuantity}>
              <Minus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>
            <Quantity>{item.quantity}</Quantity>
            <TouchableOpacity onPress={onAddQuantity}>
              <Plus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>
          </CoffeeQuantityContainer>

          <RemoveButton onPress={onDelete}>
            <Trash size={16} weight="bold" color={colors.purple} />
          </RemoveButton>
        </Footer>
      </CoffeeInfo>
    </Container>
  );
}

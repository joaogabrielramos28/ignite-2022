import React, { useState } from "react";
import {
  TagContainer,
  TagText,
  Container,
  Content,
  Main,
  ProductSection,
  PriceContainer,
  Symbol,
  Price,
  ProductRow,
  ProductName,
  Description,
  ImageContainer,
  Image,
  SmokeImage,
  Footer,
  FooterTitle,
  FooterRow,
  FooterSize,
  FooterSizeText,
  FooterAction,
  QuantityContainer,
  Quantity,
  AddButton,
  AddButtonText,
} from "./styles";

import CoffeeImage from "../../assets/coffee-product.png";
import Smoke from "../../assets/smoke.png";
import { Alert, TouchableOpacity } from "react-native";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CoffeeParams } from "../../@types/navigate";
import { carouselData } from "../../data/carousel";
import { ItemCart, useCart } from "../../hooks/useCart";

export function Coffee() {
  const { colors } = useTheme();
  const routes = useRoute();
  const { goBack } = useNavigation();
  const { addItemToCart } = useCart();

  const { id } = routes.params as CoffeeParams;

  const selectedCoffee = carouselData.find((coffee) => coffee.id === id);

  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState<number | null>(null);

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrementQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const handleChangeSize = (value: number) => {
    setSize(value);
  };

  const handleAddToCart = () => {
    if (!size) {
      return Alert.alert(
        "Erro ao adicionar ao carrinho",
        "Selecione o tamanho"
      );
    }

    const item: ItemCart = {
      id: selectedCoffee?.id!,
      name: selectedCoffee?.name!,
      price: Number(selectedCoffee?.price),
      quantity,
      size,
    };

    addItemToCart(item);
  };

  return (
    <Container>
      <Main>
        <Content>
          <Header backAction={goBack} />
          <ProductSection>
            <TagContainer>
              <TagText>{selectedCoffee?.type}</TagText>
            </TagContainer>

            <ProductRow>
              <ProductName>{selectedCoffee?.name}</ProductName>
              <PriceContainer>
                <Symbol>R$</Symbol>
                <Price>{selectedCoffee?.price}</Price>
              </PriceContainer>
            </ProductRow>

            <Description>{selectedCoffee?.description}</Description>

            <ImageContainer>
              <Image source={CoffeeImage} />
              <SmokeImage source={Smoke} />
            </ImageContainer>
          </ProductSection>
        </Content>
      </Main>
      <Footer>
        <FooterTitle>Selecione o tamanho:</FooterTitle>
        <FooterRow>
          <FooterSize
            selected={size === 114}
            onPress={() => handleChangeSize(114)}
          >
            <FooterSizeText selected={size === 114}>114ml</FooterSizeText>
          </FooterSize>
          <FooterSize
            selected={size === 140}
            onPress={() => handleChangeSize(140)}
          >
            <FooterSizeText selected={size === 140}>140ml</FooterSizeText>
          </FooterSize>
          <FooterSize
            selected={size === 227}
            onPress={() => handleChangeSize(227)}
          >
            <FooterSizeText selected={size === 227}>227ml</FooterSizeText>
          </FooterSize>
        </FooterRow>

        <FooterAction>
          <QuantityContainer>
            <TouchableOpacity
              disabled={quantity === 1}
              onPress={handleDecrementQuantity}
            >
              <Minus
                size={20}
                weight="bold"
                color={quantity !== 1 ? colors.purple : colors["gray-500"]}
              />
            </TouchableOpacity>
            <Quantity>{quantity}</Quantity>
            <TouchableOpacity onPress={handleIncrementQuantity}>
              <Plus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>

            <AddButton onPress={handleAddToCart}>
              <AddButtonText>Adicionar</AddButtonText>
            </AddButton>
          </QuantityContainer>
        </FooterAction>
      </Footer>
    </Container>
  );
}

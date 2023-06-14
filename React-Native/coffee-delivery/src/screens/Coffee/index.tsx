import React from "react";
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
import { TouchableOpacity } from "react-native";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CoffeeParams } from "../../@types/navigate";
import { carouselData } from "../../data/carousel";

export function Coffee() {
  const { colors } = useTheme();
  const routes = useRoute();
  const { goBack } = useNavigation();
  const { id } = routes.params as CoffeeParams;

  const selectedCoffee = carouselData.find((coffee) => coffee.id === id);

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
          <FooterSize>
            <FooterSizeText>114ml</FooterSizeText>
          </FooterSize>
          <FooterSize>
            <FooterSizeText>140ml</FooterSizeText>
          </FooterSize>
          <FooterSize>
            <FooterSizeText>227ml</FooterSizeText>
          </FooterSize>
        </FooterRow>

        <FooterAction>
          <QuantityContainer>
            <TouchableOpacity>
              <Minus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>
            <Quantity>1</Quantity>
            <TouchableOpacity>
              <Plus size={20} weight="bold" color={colors.purple} />
            </TouchableOpacity>

            <AddButton>
              <AddButtonText>Adicionar</AddButtonText>
            </AddButton>
          </QuantityContainer>
        </FooterAction>
      </Footer>
    </Container>
  );
}

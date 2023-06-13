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
import { Header } from "./components/header";

import CoffeeImage from "../../assets/coffee-product.png";
import Smoke from "../../assets/smoke.png";
import { TouchableOpacity } from "react-native";
import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";

export function Coffee() {
  const { colors } = useTheme();
  return (
    <Container>
      <Main>
        <Content>
          <Header />
          <ProductSection>
            <TagContainer>
              <TagText>Especial</TagText>
            </TagContainer>

            <ProductRow>
              <ProductName>Irlandês</ProductName>
              <PriceContainer>
                <Symbol>R$</Symbol>
                <Price>9,90</Price>
              </PriceContainer>
            </ProductRow>

            <Description>
              Bebida a base de café, uísque irlandês, açúcar e chantilly
            </Description>

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

import React from "react";
import {
  ConfirmButton,
  ConfirmButtonText,
  Container,
  Footer,
  Header,
  HeaderTitle,
  TotalContainer,
  TotalPrice,
  TotalText,
} from "./styles";
import { FlatList, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { CoffeeCartItem } from "./components/CoffeeCartItem";

export function Cart() {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <ArrowLeft color={colors["gray-100"]} weight="bold" size={24} />
        </TouchableOpacity>

        <HeaderTitle>Carrinho</HeaderTitle>
      </Header>

      <FlatList
        data={[0, 1, 2]}
        renderItem={({ item }) => <CoffeeCartItem />}
        keyExtractor={(item) => String(item)}
      />

      <Footer>
        <TotalContainer>
          <TotalText>Valor total</TotalText>
          <TotalPrice>R$ 9,90</TotalPrice>
        </TotalContainer>
        <ConfirmButton>
          <ConfirmButtonText>Confirmar pedido</ConfirmButtonText>
        </ConfirmButton>
      </Footer>
    </Container>
  );
}

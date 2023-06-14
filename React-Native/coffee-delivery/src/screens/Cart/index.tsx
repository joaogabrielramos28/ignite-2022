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
import { FlatList, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { CoffeeCartItem } from "./components/CoffeeCartItem";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../hooks/useCart";

export function Cart() {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const { cart, addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useCart();

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft color={colors["gray-100"]} weight="bold" size={24} />
        </TouchableOpacity>

        <HeaderTitle>Carrinho</HeaderTitle>
      </Header>

      <FlatList
        data={cart.products}
        renderItem={({ item }) => (
          <CoffeeCartItem
            onAddQuantity={() => addItemToCart(item)}
            onRemoveQuantity={() => removeItemFromCart(item.id)}
            onDelete={() => deleteItemFromCart(item.id)}
            key={item.id}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <Footer>
        <TotalContainer>
          <TotalText>Valor total</TotalText>
          <TotalPrice>R$ {cart.priceTotal.toFixed(2)}</TotalPrice>
        </TotalContainer>
        <ConfirmButton>
          <ConfirmButtonText>Confirmar pedido</ConfirmButtonText>
        </ConfirmButton>
      </Footer>
    </Container>
  );
}

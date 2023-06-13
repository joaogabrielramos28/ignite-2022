import React from "react";
import { BackButton, Container } from "./styles";
import { ArrowLeft, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function Header() {
  const { colors } = useTheme();
  return (
    <Container>
      <BackButton>
        <ArrowLeft size={24} color={colors.white} />
      </BackButton>
      <ShoppingCart weight="fill" color={colors.yellow_dark} size={20} />
    </Container>
  );
}

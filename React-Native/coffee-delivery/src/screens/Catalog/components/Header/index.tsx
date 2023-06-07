import React from "react";
import { Container, LocationContainer, LocationText } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function Header() {
  const { colors } = useTheme();
  return (
    <Container>
      <LocationContainer>
        <MapPin weight="fill" color={colors.purple} size={20} />
        <LocationText>Porto Alegre, RS</LocationText>
      </LocationContainer>

      <ShoppingCart weight="fill" color={colors.yellow_dark} size={20} />
    </Container>
  );
}

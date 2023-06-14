import React from "react";
import { Container, LocationContainer, LocationText } from "./styles";
import { ArrowLeft, MapPin, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";

type HeaderProps = {
  hasLocation?: boolean;
  cartCount?: number;
  backAction?: () => void;
};

export function Header({ hasLocation, backAction }: HeaderProps) {
  const { colors } = useTheme();
  return (
    <Container>
      {hasLocation ? (
        <LocationContainer>
          <MapPin weight="fill" color={colors.purple} size={20} />
          <LocationText>Porto Alegre, RS</LocationText>
        </LocationContainer>
      ) : (
        <TouchableOpacity onPress={backAction}>
          <ArrowLeft size={24} color={colors.white} />
        </TouchableOpacity>
      )}

      <ShoppingCart weight="fill" color={colors.yellow_dark} size={20} />
    </Container>
  );
}

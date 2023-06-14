import React from "react";
import {
  BadgeCart,
  BadgeCartCount,
  Container,
  LocationContainer,
  LocationText,
} from "./styles";
import { ArrowLeft, MapPin, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RoutesEnum } from "../../routes/routes";
import { useCart } from "../../hooks/useCart";

type HeaderProps = {
  hasLocation?: boolean;
  cartCount?: number;
  backAction?: () => void;
};

export function Header({ hasLocation, backAction }: HeaderProps) {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { cart } = useCart();

  const goToCart = () => {
    navigate(RoutesEnum.CART);
  };
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
      <TouchableOpacity
        onPress={goToCart}
        style={{
          position: "relative",
        }}
      >
        {cart.count > 0 ? (
          <BadgeCart>
            <BadgeCartCount>{cart.count}</BadgeCartCount>
          </BadgeCart>
        ) : null}

        <ShoppingCart
          weight="fill"
          color={cart.count > 0 ? colors.purple : colors.yellow_dark}
          size={20}
        />
      </TouchableOpacity>
    </Container>
  );
}

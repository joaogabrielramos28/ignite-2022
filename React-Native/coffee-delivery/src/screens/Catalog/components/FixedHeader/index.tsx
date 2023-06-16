import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Header } from "../../../../components/Header";
import {
  CategoryBadge,
  CategoryBadgeText,
  CategorySection,
  OurCoffeesTitle,
} from "../../styles";
import { CategoryEnum, CategoryType } from "../..";
import Animated from "react-native-reanimated";
import { useTheme } from "styled-components";
import { Line, Separator } from "./styles";

type FixedHeaderProps = {
  activeCategory: CategoryType;
  handleChangeCategory: (category: CategoryType) => void;
  animatedStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
};

export function FixedHeader({
  activeCategory,
  handleChangeCategory,
  animatedStyle,
}: FixedHeaderProps) {
  const { colors } = useTheme();
  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          flex: 1,
          paddingHorizontal: 32,
          backgroundColor: colors.white,
        },
      ]}
    >
      <Header hasLocation isLight={false} />
      <Line />
      <Separator />
      <OurCoffeesTitle>Nossos cafés</OurCoffeesTitle>

      <CategorySection>
        <CategoryBadge
          onPress={() => handleChangeCategory(CategoryEnum.TRADITIONAL)}
          active={activeCategory === CategoryEnum.TRADITIONAL}
        >
          <CategoryBadgeText
            active={activeCategory === CategoryEnum.TRADITIONAL}
          >
            Tradicionais
          </CategoryBadgeText>
        </CategoryBadge>
        <CategoryBadge
          onPress={() => handleChangeCategory(CategoryEnum.SWEET)}
          active={activeCategory === CategoryEnum.SWEET}
        >
          <CategoryBadgeText active={activeCategory === CategoryEnum.SWEET}>
            doces
          </CategoryBadgeText>
        </CategoryBadge>
        <CategoryBadge
          onPress={() => handleChangeCategory(CategoryEnum.SPECIALTY)}
          active={activeCategory === CategoryEnum.SPECIALTY}
        >
          <CategoryBadgeText active={activeCategory === CategoryEnum.SPECIALTY}>
            especiais
          </CategoryBadgeText>
        </CategoryBadge>
      </CategorySection>
    </Animated.View>
  );
}

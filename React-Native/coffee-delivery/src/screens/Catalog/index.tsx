import React from "react";
import {
  CategoryBadge,
  CategoryBadgeText,
  CategorySection,
  CoffeeListSection,
  CoffeeSection,
  Container,
  OurCoffeesSection,
  OurCoffeesTitle,
  SearchInput,
  SearchInputContainer,
  SearchSection,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { Header } from "./components/Header";
import { MagnifyingGlass } from "phosphor-react-native";
import { FlatList, Image, Text } from "react-native";

import CoffeeImage from "../../assets/coffee.png";
import { CoffeeCardCarousel } from "./components/CoffeeCardCarousel";

export function Catalog() {
  const { colors } = useTheme();
  return (
    <Container>
      <SearchSection>
        <Header />
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SearchInputContainer>
          <MagnifyingGlass color={colors["gray-400"]} size={16} />
          <SearchInput
            placeholder="Pesquisar"
            placeholderTextColor={colors["gray-400"]}
          />
        </SearchInputContainer>
        <CoffeeSection>
          <Image source={CoffeeImage} />
        </CoffeeSection>
      </SearchSection>
      <CoffeeListSection>
        <FlatList
          style={{ overflow: "visible" }}
          contentContainerStyle={{
            gap: 32,
          }}
          data={[1, 2]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <CoffeeCardCarousel key={item} />}
        />
      </CoffeeListSection>

      <OurCoffeesSection>
        <OurCoffeesTitle>Nossos cafés</OurCoffeesTitle>

        <CategorySection>
          <CategoryBadge>
            <CategoryBadgeText>Tradicionais</CategoryBadgeText>
          </CategoryBadge>
          <CategoryBadge>
            <CategoryBadgeText>doces</CategoryBadgeText>
          </CategoryBadge>
          <CategoryBadge>
            <CategoryBadgeText>especiais</CategoryBadgeText>
          </CategoryBadge>
        </CategorySection>
      </OurCoffeesSection>
    </Container>
  );
}

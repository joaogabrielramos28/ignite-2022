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
  SectionTitle,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { MagnifyingGlass } from "phosphor-react-native";
import { FlatList, Image, SectionList } from "react-native";

import CoffeeImage from "../../assets/coffee.png";
import { CoffeeCardCarousel } from "./components/CoffeeCardCarousel";
import { CoffeeCardList } from "./components/CoffeeCardList";

import { data } from "../../data";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { RoutesEnum } from "../../routes/routes";
import { carouselData } from "../../data/carousel";

export function Catalog() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const goToCoffeeDetails = (id: string) => {
    navigate(RoutesEnum.COFFEE, {
      id,
    });
  };
  return (
    <Container>
      <SearchSection>
        <Header hasLocation />
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
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CoffeeCardCarousel
              goToDetails={() => goToCoffeeDetails(item.id)}
              item={item}
              key={item.id}
            />
          )}
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
        <SectionList
          sections={data}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: 32,
            overflow: "visible",
          }}
          contentContainerStyle={{
            gap: 32,
          }}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
          renderItem={({ item }) => <CoffeeCardList {...item} />}
        />
      </OurCoffeesSection>
    </Container>
  );
}

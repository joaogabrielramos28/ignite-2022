import React from "react";
import {
  CoffeeSection,
  Container,
  SearchInput,
  SearchInputContainer,
  SearchSection,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { Header } from "./components/Header";
import { MagnifyingGlass } from "phosphor-react-native";
import { Image, Text } from "react-native";

import CoffeeImage from "../../assets/coffee.png";

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
    </Container>
  );
}

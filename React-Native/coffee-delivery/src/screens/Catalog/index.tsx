import React, { useEffect, useRef, useState } from "react";
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
import { Image, ScrollView, SectionList, View } from "react-native";

import CoffeeImage from "../../assets/coffee.png";
import { CoffeeCardCarousel } from "./components/CoffeeCardCarousel";
import { CoffeeCardList } from "./components/CoffeeCardList";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  color,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { data } from "../../data";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { RoutesEnum } from "../../routes/routes";
import { carouselData } from "../../data/carousel";
import { FixedHeader } from "./components/FixedHeader";

export enum CategoryEnum {
  TRADITIONAL = "traditional",
  SPECIALTY = "specialty",
  SWEET = "sweet",
}

export type CategoryType = "traditional" | "specialty" | "sweet";

export function Catalog() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [growUpItems, setGrowUpItems] = useState(1);
  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    CategoryEnum.TRADITIONAL
  );
  const scrollY = useSharedValue(0);

  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const handleChangeCategory = (category: CategoryType) => {
    if (category === CategoryEnum.TRADITIONAL) {
      scrollViewRef.current?.scrollTo({
        animated: true,
        y: 760,
      });
    }
    if (category === CategoryEnum.SWEET) {
      scrollViewRef.current?.scrollTo({
        animated: true,
        y: 1614,
      });
    } else {
      scrollViewRef.current?.scrollTo({
        animated: true,
        y: 2437,
      });
    }
    setActiveCategory(category);
  };

  const goToCoffeeDetails = (id: string) => {
    navigate(RoutesEnum.COFFEE, {
      id,
    });
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    setGrowUpItems(Number(viewableItems[0].index));
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const removeDefaultCategories = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [400, 700],
        [10, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const fixedProgressBarStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      paddingVertical: 20,

      width: "100%",
      zIndex: 1,

      opacity: interpolate(
        scrollY.value,
        [500, 700],
        [0, 10],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [500, 700],
            [-40, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FixedHeader
        activeCategory={activeCategory}
        handleChangeCategory={handleChangeCategory}
        animatedStyle={fixedProgressBarStyles}
      />
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={scrollHandler}
        style={{
          backgroundColor: colors["white"],
        }}
      >
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
          <Animated.FlatList
            style={{ overflow: "visible" }}
            contentContainerStyle={{
              gap: 32,
            }}
            data={carouselData}
            horizontal
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CoffeeCardCarousel
                goToDetails={() => goToCoffeeDetails(item.id)}
                item={item}
                key={item.id}
                index={index}
                isActive={growUpItems === index}
              />
            )}
          />
        </CoffeeListSection>

        <OurCoffeesSection>
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={removeDefaultCategories}
          >
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
                <CategoryBadgeText
                  active={activeCategory === CategoryEnum.SWEET}
                >
                  doces
                </CategoryBadgeText>
              </CategoryBadge>
              <CategoryBadge
                onPress={() => handleChangeCategory(CategoryEnum.SPECIALTY)}
                active={activeCategory === CategoryEnum.SPECIALTY}
              >
                <CategoryBadgeText
                  active={activeCategory === CategoryEnum.SPECIALTY}
                >
                  especiais
                </CategoryBadgeText>
              </CategoryBadge>
            </CategorySection>
          </Animated.View>
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
            renderItem={({ item, index }) => (
              <CoffeeCardList index={index} {...item} />
            )}
          />
        </OurCoffeesSection>
      </Animated.ScrollView>
    </View>
  );
}

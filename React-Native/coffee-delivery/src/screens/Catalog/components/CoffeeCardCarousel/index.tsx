import React, { useEffect } from "react";
import {
  CoffeeImage,
  Container,
  Description,
  InfoCard,
  Name,
  Price,
  PriceContainer,
  Symbol,
  TagContainer,
  TagText,
} from "./styles";

import Americano from "../../../../assets/americano.png";
import { CarouselItem } from "../../../../data/types";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type CoffeeCardCarouselProps = {
  goToDetails: () => void;
  item: CarouselItem;
  index: number;
  isActive: boolean;
};

export function CoffeeCardCarousel({
  item,
  goToDetails,
  index,
  isActive,
}: CoffeeCardCarouselProps) {
  const scaleValue = useSharedValue(1);

  const styledAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  useEffect(() => {
    if (isActive) {
      scaleValue.value = withSpring(1.15);
    } else {
      scaleValue.value = withSpring(1);
    }
  }, [isActive]);

  return (
    <Animated.View style={styledAnimated} entering={FadeIn.delay(index * 100)}>
      <Container isActive={isActive} onPress={goToDetails}>
        <CoffeeImage source={item.image} />
        <TagContainer>
          <TagText>{item.type}</TagText>
        </TagContainer>

        <InfoCard>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
        </InfoCard>

        <PriceContainer>
          <Symbol>R$</Symbol>
          <Price>{item.price}</Price>
        </PriceContainer>
      </Container>
    </Animated.View>
  );
}

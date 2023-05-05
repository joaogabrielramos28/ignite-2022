import React, { useState } from "react";
import { HStack, Image, View } from "native-base";
import { Dimensions } from "react-native";
import ReanimatedCarousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("screen").width;

type Props = {
  images: string[];
};

const IndexItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <View
      bottom={"10px"}
      h={"3px"}
      width={"121px"}
      bgColor={"gray.600"}
      opacity={isActive ? 1 : 0.3}
      rounded={"full"}
    ></View>
  );
};

export const Carousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <ReanimatedCarousel
      width={WIDTH}
      height={280}
      data={images}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => setIndex(index)}
      renderItem={({ item }) => (
        <View position="relative" width="100%">
          <Image
            width={WIDTH}
            height={280}
            source={{
              uri: item,
            }}
            alt=""
          />
          <HStack space={2}>
            {images.map((item, i) => (
              <IndexItem key={i} isActive={index === i} />
            ))}
          </HStack>
        </View>
      )}
    />
  );
};

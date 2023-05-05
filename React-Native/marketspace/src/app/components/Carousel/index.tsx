import React, { useState } from "react";
import { Center, HStack, Image, Text, View } from "native-base";
import { Dimensions } from "react-native";
import ReanimatedCarousel from "react-native-reanimated-carousel";

const WIDTH = Dimensions.get("screen").width;

type Props = {
  images: string[];
  isDisabled?: boolean;
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

export const Carousel = ({ images, isDisabled = false }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <ReanimatedCarousel
      width={WIDTH}
      height={280}
      data={images}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => setIndex(index)}
      renderItem={({ item }) => (
        <View width="100%" position="relative">
          {isDisabled ? (
            <View
              background={"gray.100"}
              top={0}
              width={WIDTH}
              height={280}
              left={0}
              position={"absolute"}
              opacity={0.6}
              zIndex={9999}
            >
              <Center flex={1}>
                <Text
                  color={"gray.700"}
                  fontSize={"sm"}
                  fontFamily={"heading"}
                  textTransform="uppercase"
                >
                  Anúncio desativado
                </Text>
              </Center>
            </View>
          ) : null}

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

import { Button } from "@components/Button";
import { Box, HStack, Heading, Text, VStack, useTheme } from "native-base";
import { ArrowRight, Tag } from "phosphor-react-native";
import React from "react";

type Props = {
  count: number;
  onPress: () => void;
};

export const MyAdsCard = ({ count, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <HStack
      borderRadius="6px"
      marginTop={3}
      paddingX={4}
      paddingY={3}
      width="100%"
      bgColor="#647AC71A"
      justifyContent="space-between"
    >
      <HStack space={4} alignItems="center">
        <Tag color={colors.blue[600]} size={22} />
        <VStack>
          <Heading fontSize="lg" fontFamily="heading" color="gray.200">
            {count}
          </Heading>
          <Text fontSize="xs" color="gray.200">
            anúncios ativos
          </Text>
        </VStack>
      </HStack>

      <Button
        onPress={onPress}
        title="Meus anúncios"
        variant="text"
        textColor="blue.600"
        endIcon={<ArrowRight size={16} color={colors.blue[600]} />}
      />
    </HStack>
  );
};

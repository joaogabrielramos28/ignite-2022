import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const HomeHeader = () => {
  return (
    <HStack bg={"gray.600"} pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{
          uri: "https://avatars.githubusercontent.com/u/5466341?v=4",
        }}
        size={16}
        alt="Image do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          João
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} size={7} name="logout" color={"gray.200"} />
      </TouchableOpacity>
    </HStack>
  );
};

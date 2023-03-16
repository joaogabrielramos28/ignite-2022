import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export const Home = () => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [groupSelected, setGroupSelected] = useState("Costas");
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Triceps",
    "Ombros",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada Frontal",
    "Remada Unilateral",
    "Supino reto",
  ]);

  const onChangeGroup = (name: string) => {
    setGroupSelected(name);
  };

  const handleOpenExerciseDetail = () => {
    navigate("exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
        minH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => onChangeGroup(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetail} />
          )}
        />
      </VStack>
    </VStack>
  );
};

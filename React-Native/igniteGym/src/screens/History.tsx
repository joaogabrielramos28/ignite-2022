import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export const History = () => {
  const [exercises, setExercises] = useState([
    {
      title: "26.02.23",
      data: ["Puxada", "Agachamento", "Abdominal"],
    },
    {
      title: "28.02.23",
      data: ["Puxada", "Agachamento"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {title}
          </Heading>
        )}
        contentContainerStyle={
          [].length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercicios registrados ainda.{"\n"} Vamo fazer exercícios
            hoje?
          </Text>
        )}
        px={8}
      />
    </VStack>
  );
};

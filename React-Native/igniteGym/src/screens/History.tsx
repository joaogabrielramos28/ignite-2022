import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryGroupGyDateDTO } from "@dtos/HistoryByDayDTO";
import { HistoryDTO } from "@dtos/HistoryDTO";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { Heading, SectionList, Text, VStack, useToast } from "native-base";
import { useCallback, useState } from "react";

export const History = () => {
  const toast = useToast();
  const [exercises, setExercises] = useState<HistoryGroupGyDateDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const response = await api.get("/history");

      setExercises(response.data);
    } catch (err) {
      const isAppError = err instanceof AppError;
      const title = isAppError
        ? err.message
        : "Não foi possível carregar o histórico";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <HistoryCard data={item} />}
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
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
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

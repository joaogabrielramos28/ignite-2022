import React, { useState } from "react";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("new");
  };
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />
      <Button title="Cadastrar turma" onPress={handleNewGroup} />
    </Container>
  );
};

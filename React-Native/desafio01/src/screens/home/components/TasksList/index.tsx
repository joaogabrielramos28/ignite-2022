import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Tasks} from '../..';
import {TaskCard} from '../TaskCard';
import ClipBoard from '../../../../assets/Clipboard.png';

type TaskProps = {
  tasks: Tasks[];
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
};

export const TasksList = ({
  tasks,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  const _listEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Image source={ClipBoard} />
        <Text
          style={{
            color: '#808080',
            fontWeight: 'bold',
            lineHeight: 20,
          }}>
          Você ainda não tem tarefas cadastradas{'\n'}
          <Text
            style={{
              color: '#808080',
              fontWeight: 'normal',
            }}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={tasks}
          ListEmptyComponent={_listEmptyComponent}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: 8,
              }}>
              <TaskCard
                task={item}
                handleCompleteTask={handleCompleteTask}
                handleDeleteTask={handleDeleteTask}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },

  content: {
    width: '100%',

    marginTop: 20,
  },

  emptyContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 8,
  },
});

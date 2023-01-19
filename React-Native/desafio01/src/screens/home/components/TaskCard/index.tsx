import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Trash from '../../../../assets/Trash.png';
import Check from '../../../../assets/Check.png';
import {Tasks} from '../..';

type TaskCardProps = {
  task: Tasks;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
};

export const TaskCard = ({
  task,
  handleCompleteTask,
  handleDeleteTask,
}: TaskCardProps) => {
  const completed = task.completed;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={completed ? styles.done : styles.notDone}
        onPress={() => handleCompleteTask(task.id)}>
        {completed ? <Image source={Check} /> : null}
      </TouchableOpacity>
      <Text style={completed ? styles.textDone : styles.textNotDone}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  notDone: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    borderColor: '#4EA8DE',
    borderWidth: 2,
  },
  done: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#8284FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#808080',
    maxWidth: 235,
    width: '100%',
  },
  textNotDone: {
    color: '#F2F2F2',
    maxWidth: 235,
    width: '100%',
  },
});

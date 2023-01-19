import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CountOfTasks} from './components/CountOfTasks';
import {Form} from './components/Form';
import {Header} from './components/Header';
import {TasksList} from './components/TasksList';

export type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};

export const Home = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const handleCompleteTask = (id: number) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleCreateTask = (title: string) => {
    const newTask = {
      id: new Date().getTime(),
      title,
      completed: false,
    };
    setTasks(oldState => [...oldState, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  return (
    <>
      <Header />
      <SafeAreaView style={styles.container}>
        <Form createTask={handleCreateTask} />
        <CountOfTasks completedTasks={completedTasks} allTasks={tasks.length} />
        <TasksList
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
});

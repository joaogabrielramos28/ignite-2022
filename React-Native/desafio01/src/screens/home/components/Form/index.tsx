import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Plus from '../../../../assets/Plus.png';

type FormProps = {
  createTask: (task: string) => void;
};

export const Form = ({createTask}: FormProps) => {
  const [task, setTask] = React.useState('');

  const handleCreateTask = () => {
    createTask(task);

    setTask('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        style={styles.input}
        placeholderTextColor={'#808080'}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
        <Image source={Plus} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    transform: [{translateY: -20}],
    gap: 8,
  },
  input: {
    backgroundColor: '#262626',
    color: '#808080',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    padding: 16,
    maxWidth: 300,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    padding: 18,
  },
});

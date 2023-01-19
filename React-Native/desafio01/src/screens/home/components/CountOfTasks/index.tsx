import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CountOfTasksProps = {
  completedTasks: number;
  allTasks: number;
};

export const CountOfTasks = ({completedTasks, allTasks}: CountOfTasksProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.createdTasks}>Criadas</Text>
        <View style={styles.countWrapper}>
          <Text
            style={{
              color: '#D9D9D9',
            }}>
            {allTasks}
          </Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.finishedTasks}>Concluidas</Text>
        <View style={styles.countWrapper}>
          <Text
            style={{
              color: '#D9D9D9',
            }}>
            {completedTasks}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  createdTasks: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  finishedTasks: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  countWrapper: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 9999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

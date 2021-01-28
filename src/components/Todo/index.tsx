import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from '../../../classes/Todo';

export default function TodoComponent({
  todo,
  onChangeDone,
}: {
  todo: Todo;
  onChangeDone: () => void;
}) {
  const { title, isDone } = todo;
  return (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>{title}</Text>
      <CheckBox value={isDone} onChange={onChangeDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 30,
    marginRight: 10,
  },
});

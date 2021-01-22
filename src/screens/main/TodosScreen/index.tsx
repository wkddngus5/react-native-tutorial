import React, { useCallback, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { RootStoreState } from '../../../reducer/index';
import { addTodo, toggleDoneTodo } from '../../../actions/Todo';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../../../../classes/Todo';

export default function TodosScreen() {
  const dispatch = useDispatch();
  const todos = useSelector<RootStoreState, Todo[]>(
    (store): Todo[] => store.todo.todos,
  );
  const [title, setTitle] = useState<string>('');

  const onAddTodo = useCallback(() => {
    dispatch(addTodo({ title }));
    setTitle('');
  }, [dispatch, title]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todos Screen</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="todo title"
      />
      <Button title="ADD" onPress={onAddTodo} />
      {todos.map(({ title, isDone }, index) => {
        const onToggleDoneTodo = () => {
          dispatch(toggleDoneTodo({ index, isDone }));
        };
        return (
          <View style={styles.todo} data-id={index} key={index}>
            <Text style={styles.todoTitle}>{title}</Text>
            <CheckBox value={isDone} onChange={onToggleDoneTodo} />
          </View>
        );
      })}
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

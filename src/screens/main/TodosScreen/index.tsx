import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { RootStoreState } from '../../../reducer/index';
import { addTodo, toggleDoneTodo } from '../../../actions/Todo';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../../../../classes/Todo';
import TodoComponent from '../../../components/Todo';

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

  const todoList = useMemo(() => {
    return todos.map((todo, index) => {
      const onToggleDoneTodo = () => {
        dispatch(toggleDoneTodo({ index, isDone: todo.isDone }));
      };
      return (
        <TodoComponent
          todo={todo}
          key={index}
          onChangeDone={onToggleDoneTodo}
        />
      );
    });
  }, [todos, dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todos Screen</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="todo title"
      />
      <Button title="ADD" onPress={onAddTodo} />
      {todoList}
    </View>
  );
}

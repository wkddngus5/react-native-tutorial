import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, Button, TextInput, Modal, StyleSheet } from 'react-native';
import { RootStoreState } from '../../../reducer/index';
import { addTodo, toggleDoneTodo } from '../../../actions/Todo';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../../../../classes/Todo';
import TodoComponent from '../../../components/Todo';

export default function TodosScreen() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  const todos = useSelector<RootStoreState, Todo[]>((store): Todo[] => {
    return store.todo.todos;
  });
  const [title, setTitle] = useState<string>('');

  const onAddTodo = useCallback(() => {
    dispatch(addTodo({ title }));
    setTitle('');
    setShowModal(true);
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
      <Modal visible={showModal}>
        <View style={styles.modalBody}>
          <Text style={styles.modalText}>new Todo is added!</Text>
          <Button title="OK" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
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

const styles = StyleSheet.create({
  modalBody: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  modalText: {
    textAlign: 'center',
  },
});

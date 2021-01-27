import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import TodosScreen from '../src/screens/main/TodosScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducer';
import { ReactTestInstance } from 'react-test-renderer';

const mockStore = configureStore([]);

describe('Todo Component', () => {
  it('render', () => {
    const store = mockStore({
      todo: { todos: [] },
    });
    const { queryByText, toJSON } = render(
      <Provider store={store}>
        <TodosScreen />
      </Provider>,
    );
    expect(queryByText('Todos Screen')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('add todo', () => {
    const { getByPlaceholderText, queryByText } = render(
      <Provider store={createStore(rootReducer)}>
        <TodosScreen />
      </Provider>,
    );
    const $inputText = getByPlaceholderText('todo title');
    fireEvent.changeText($inputText, 'new todo');
    fireEvent.press(queryByText('ADD') as ReactTestInstance);
    expect(queryByText('new todo')).toBeTruthy();
  });
});

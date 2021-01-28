import React from 'react';
import { render } from '@testing-library/react-native';
import TodoComponent from '../../src/components/Todo';
import Todo from '../../classes/Todo';

describe('Todo Component', () => {
  it('test', () => {
    const title = 'TITLE';

    const todo = new Todo({ title, isDone: false });
    const { queryByText } = render(
      <TodoComponent todo={todo} onChangeDone={() => {}} />,
    );
    expect(queryByText(title)).toBeTruthy();
  });
});

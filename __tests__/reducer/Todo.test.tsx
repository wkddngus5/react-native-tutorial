import TodoReducer from '../../src/reducer/Todo';
import { TODO_ACTION, TODO_ACTION_TYPE } from '../../src/actions/Todo';

describe('Todo Component', () => {
  it('add todo', () => {
    const initialState = { todos: [] };
    const action: TODO_ACTION = { type: TODO_ACTION_TYPE.ADD, title: 'test' };
    const newState = TodoReducer(initialState, action);
    expect(newState.todos).toEqual(
      expect.arrayContaining([{ title: 'test', isDone: false }]),
    );
  });
});

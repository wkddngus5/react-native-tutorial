import Todo from '../../../classes/Todo';
import { TODO_ACTION, TODO_ACTION_TYPE } from '../../actions/Todo';

const initialState = { todos: [] };

const todo = (state = initialState, action: TODO_ACTION) => {
  const { todos }: { todos: Todo[] } = state;
  switch (action.type) {
    case TODO_ACTION_TYPE.ADD:
      const { title } = action;
      return { todos: [...todos, new Todo({ title, isDone: false })] };
    case TODO_ACTION_TYPE.DONE:
      const { index, isDone } = action;
      const newTodos = [...todos];
      newTodos[index].isDone = !isDone;
      return { todos: newTodos };
    default:
      return state;
  }
};

export default todo;

import { combineReducers } from 'redux';
import Todo from '../../classes/Todo';
import TodoReducer from './Todo';

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export default rootReducer;

export type RootStoreState = {
  todo: { todos: Todo[] };
};

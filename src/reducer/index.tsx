import { combineReducers } from 'redux';
import Todo from '../Todo';
import TodoReducer from './Todo';

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export default rootReducer;

export type RootStoreState = {
  todo: { todos: Todo[] };
};

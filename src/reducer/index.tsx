import { combineReducers } from 'redux';
import Todo from '../../classes/Todo';
import todo from './Todo';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;

export type RootStoreState = {
  todo: { todos: Todo[] };
};

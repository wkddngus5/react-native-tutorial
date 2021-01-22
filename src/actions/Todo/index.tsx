export enum TODO_ACTION_TYPE {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  RESET = 'RESET',
  DONE = 'DONE',
}

export type TODO_ACTION =
  | { type: TODO_ACTION_TYPE.ADD; title: string }
  | { type: TODO_ACTION_TYPE.DONE; index: number; isDone: boolean };

export const addTodo = ({ title = '' }) => ({
  type: TODO_ACTION_TYPE.ADD,
  title,
});

export const toggleDoneTodo = ({
  index,
  isDone,
}: {
  index: number;
  isDone: boolean;
}) => ({
  type: TODO_ACTION_TYPE.DONE,
  index,
  isDone,
});

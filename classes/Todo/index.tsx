export default class Todo {
  title: string;
  isDone: boolean;
  constructor(
    { title = '', isDone = false }: { title: string; isDone: boolean } = {
      title: '',
      isDone: false,
    },
  ) {
    this.title = title;
    this.isDone = isDone;
  }
}

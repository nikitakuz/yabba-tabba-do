import { TodoTab } from './tab/tab';

export class Todo {
  id: number;
  name: string;
  tabs: TodoTab[];

  constructor(id: number, name: string, tabs: TodoTab[]) {
    this.id = id;
    this.name = name;
    this.tabs = tabs;
  }
}

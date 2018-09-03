import { TodoTab } from './tab/tab';

export class Todo {
  $key?: string;
  createdBy: string;
  name: string;
  tabs: TodoTab[];

  constructor(createdBy: string, name: string, tabs: TodoTab[]) {
    this.createdBy = createdBy;
    this.name = name;
    this.tabs = tabs;
  }
}

import { TodoTabItem } from './item/item';

export class TodoTab {
  createdBy: string;
  todoId: string;
  name: string;
  items: TodoTabItem[];

  constructor(createdBy: string, todoId: string, name: string, items: TodoTabItem[]) {
    this.createdBy = createdBy;
    this.todoId = todoId;
    this.name = name;
    this.items = items;
  }
}

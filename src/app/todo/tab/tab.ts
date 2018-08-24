import { TodoTabItem } from './item/item';

export class TodoTab {
  name: string;
  items: TodoTabItem[];
  constructor(name: string, items: TodoTabItem[]) {
    this.name = name;
    this.items = items;
  }
}

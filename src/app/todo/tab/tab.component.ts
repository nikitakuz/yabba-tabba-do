import { Component, Input, OnInit } from '@angular/core';
import { TodoTab } from './tab';
import {TodoTabItem} from './item/item';

@Component({
  selector: 'app-todo-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TodoTabComponent implements OnInit {
  @Input() tab: TodoTab;
  editingItem = -1;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const items = this.tab.items;
    items.push(new TodoTabItem(''));
    this.editingItem = items.length - 1;
  }
}

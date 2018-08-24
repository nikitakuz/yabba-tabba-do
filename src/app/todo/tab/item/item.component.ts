import { Component, Input, OnInit } from '@angular/core';
import { TodoTabItem } from './item';

@Component({
  selector: 'app-todo-tab-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class TodoTabItemComponent implements OnInit {
  @Input() item: TodoTabItem;

  constructor() { }

  ngOnInit() {
  }

}

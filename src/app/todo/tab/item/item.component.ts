import { Component, Input, OnInit } from '@angular/core';
import { TodoTabItem } from './item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-tab-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class TodoTabItemComponent implements OnInit {
  @Input() item: TodoTabItem;
  @Input() editing = false;
  name = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    this.name.setValue(this.item.name);
  }

  update() {
    this.item.name = this.name.value;
  }
}

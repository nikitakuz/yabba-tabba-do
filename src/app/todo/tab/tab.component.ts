import { Component, Input, OnInit } from '@angular/core';
import { TodoTab } from './tab';

@Component({
  selector: 'app-todo-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TodoTabComponent implements OnInit {
  @Input() tab: TodoTab;

  constructor() { }

  ngOnInit() {
  }

}

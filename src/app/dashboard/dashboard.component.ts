import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-data';
import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = TODOS;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }
}

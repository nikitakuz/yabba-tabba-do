import { Component, HostBinding, OnInit } from '@angular/core';
import { TODOS } from '../mock-data';
import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';
import { slideRightLeftAnimation } from '../animations/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideRightLeftAnimation]
})
export class DashboardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')     width = '100%';

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

import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from '../auth/auth.service';
import { TodoService } from '../todo/todo.service';
import { TODOS } from '../mock-data';
import { Todo } from '../todo/todo';
import { slideRightLeftAnimation } from '../animations/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideRightLeftAnimation]
})
export class DashboardComponent implements OnInit {
  @HostBinding('@routeAnimation')
  routeAnimation = true;

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      'display: block; position: absolute; width: 100%; height: 100%'
    );
  }

  todos: Todo[] = TODOS;
  private todosCollection: AngularFirestoreCollection<Todo>;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService, private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
    this.todosCollection = this.todoService.getTodosCollection();
  }

  signOut() {
    this.authService.signOut();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    this.todoService.addTodo();
  }
}

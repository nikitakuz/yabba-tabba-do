import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';

import { Todo } from './todo';
import { TODOS } from '../mock-data';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private authService: AuthService, private afs: AngularFirestore) { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

  getTodosCollection(): AngularFirestoreCollection<Todo> {
    return this.afs.collection<Todo>('todos');
  }

  getTodo(id: number): Observable<Todo> {
    return of(TODOS.find(todo => todo.id === id));
  }

  addTodo(): void {
    console.log('TODO: implement addTodo :-)');
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './todo';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  getTodos(): Observable<Todo[]> {
    const uid = this.authService.uid;
    const query = this.afs.collection('todos',
        ref => ref.where('createdBy', '==', uid)
    );
    return query.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Todo;
          const id = a.payload.doc.id;
          return { $key: id, ...data };
        });
      })
    );
  }

  getTodosCollection(): AngularFirestoreCollection<Todo> {
    return this.afs.collection<Todo>('todos');
  }

  getTodo(uid: string): AngularFirestoreDocument<Todo> {
    return this.afs.doc<Todo>('todos/' + uid);
  }

  addTodo(): void {
    const todo = { createdBy: this.authService.uid, name: '', tabs: [] };
    this.getTodosCollection().add(todo);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { TodoTab } from './tab';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoTabService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  private getTabsCollection() {
    return this.afs.collection<TodoTab>('tabs');
  }

  addTab(todoId: string, name) {
    const tab = { createdBy: this.authService.uid, todoId: todoId, name: name, items: [] };
    return this.getTabsCollection().add(tab);
  }
}

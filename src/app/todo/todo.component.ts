import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { Todo } from './todo';
import { TodoService } from './todo.service';
import { slideLeftRightAnimation } from '../animations/animations';
import { TodoTab } from './tab/tab';
import { TodoTabService } from './tab/tab.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [slideLeftRightAnimation]
})
export class TodoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')     width = '100%';
  @HostBinding('style.height')    height = '100%';

  @Input() todo: AngularFirestoreDocument<Todo>;
  @Input() selectedTab = 0;

  todoId: string;
  name = new FormControl('');
  newTabName = new FormControl('');
  tabs: TodoTab[] = [];

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private todoTabService: TodoTabService
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(this.todoId);
    this.todo.valueChanges().subscribe(todo => {
      this.name.setValue(todo.name);
      this.tabs = todo.tabs;
    });
  }

  updateName() {
    this.todo.
      update({ name: this.name.value }).
      catch(function(reason) {
        throw reason;
      });
  }

  createNewTab() {
    this.todoTabService.addTab(this.todoId, this.newTabName.value).then(function(tab) {
      debugger;
      // TODO figure out what to do here
    });
  }

  nextTab() {
    this.todo.valueChanges().subscribe(todo => {
      if (this.selectedTab < todo.tabs.length - 1) {
        this.selectedTab++;
      }
    });
  }

  prevTab() {
    if (this.selectedTab > 0) {
      this.selectedTab--;
    }
  }

  onSelectedIndexChange(selectedTab: number) {
    this.selectedTab = selectedTab;
  }
}

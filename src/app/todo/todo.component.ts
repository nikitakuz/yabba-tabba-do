import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from './todo';
import { TodoService } from './todo.service';
import { slideLeftRightAnimation } from '../animations/animations';

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

  @Input() todo: Todo;
  @Input() selectedTab = 0;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  nextTab() {
    if (this.selectedTab < this.todo.tabs.length - 1) {
      this.selectedTab++;
    }
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

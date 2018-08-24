import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';

import { RoutingModule } from '../routing/routing.module';
import { TodoComponent } from './todo.component';
import { TodoTabModule } from './tab/tab.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    TodoTabModule
  ],
  exports: [],
  declarations: [TodoComponent]
})
export class TodoModule { }

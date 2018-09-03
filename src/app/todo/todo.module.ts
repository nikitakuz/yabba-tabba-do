import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatInputModule, MatTabsModule, MatToolbarModule } from '@angular/material';

import { RoutingModule } from '../routing/routing.module';
import { TodoComponent } from './todo.component';
import { TodoTabModule } from './tab/tab.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RoutingModule,
    TodoTabModule
  ],
  exports: [],
  declarations: [TodoComponent]
})
export class TodoModule { }

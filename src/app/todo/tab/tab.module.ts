import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTabItemModule } from './item/item.module';

import { TodoTabComponent } from './tab.component';
import { MatIconModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    TodoTabItemModule
  ],
  exports: [TodoTabComponent],
  declarations: [TodoTabComponent]
})
export class TodoTabModule { }

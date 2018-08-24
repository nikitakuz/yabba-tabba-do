import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTabItemModule } from './item/item.module';

import { TodoTabComponent } from './tab.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    TodoTabItemModule
  ],
  exports: [TodoTabComponent],
  declarations: [TodoTabComponent]
})
export class TodoTabModule { }

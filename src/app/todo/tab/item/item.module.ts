import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material';
import { TodoTabItemComponent } from './item.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [TodoTabItemComponent],
  declarations: [TodoTabItemComponent]
})
export class TodoTabItemModule { }

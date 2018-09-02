import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule, MatInputModule } from '@angular/material';

import { TodoTabItemComponent } from './item.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [TodoTabItemComponent],
  declarations: [TodoTabItemComponent]
})
export class TodoTabItemModule { }

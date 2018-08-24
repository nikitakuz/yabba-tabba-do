import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { RoutingModule } from '../routing/routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RoutingModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }

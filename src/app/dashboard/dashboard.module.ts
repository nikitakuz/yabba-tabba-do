import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RoutingModule } from '../routing/routing.module';
import { MatButtonModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

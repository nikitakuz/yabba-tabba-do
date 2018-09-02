import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatTooltipModule, MatToolbarModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

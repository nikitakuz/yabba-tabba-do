import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuardService, NegateAuthGuardService } from '../auth/auth-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [NegateAuthGuardService],
    component: AuthComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'todo/:id',
    canActivate: [AuthGuardService],
    component: TodoComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }

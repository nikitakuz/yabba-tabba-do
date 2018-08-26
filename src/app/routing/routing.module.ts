import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo/:id', component: TodoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }

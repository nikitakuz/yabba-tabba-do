import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    AddtaskComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
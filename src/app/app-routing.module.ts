import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CourseContainerComponent } from 'src/components/course-container/course-container.component';
import { StudentContainerComponent } from '../components/student-container/student-container.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'courses', component: CourseContainerComponent},
  { path: 'students', component: StudentContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

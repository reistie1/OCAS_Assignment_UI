import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../components/register/register.component';
import { CourseListComponent } from '../components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseContainerComponent } from 'src/components/course-container/course-container.component';
import { CourseFormComponent } from 'src/components/course-form/course-form.component';
import { EditCourseFormComponent } from 'src/components/edit-course-form/edit-course-form.component';
import { StudentListComponent } from 'src/components/student-list/student-list.component';
import { EditStudentFormComponent } from 'src/components/edit-student-form/edit-student-form.component';
import { StudentFormComponent } from 'src/components/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CourseListComponent,
    HomeComponent,
    LoginComponent,
    CourseContainerComponent,
    CourseFormComponent,
    EditCourseFormComponent,
    StudentListComponent,
    EditStudentFormComponent,
    StudentFormComponent
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

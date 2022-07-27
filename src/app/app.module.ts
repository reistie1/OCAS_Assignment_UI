import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
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
import { StudentContainerComponent } from 'src/components/student-container/student-container.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SchoolContainerComponent } from 'src/components/school-container/school-container.component';
import { SchoolFormComponent } from 'src/components/school-form/school-form.component';
import { NotificationComponentComponent } from 'src/components/notification-component/notification-component.component';
import { TeacherContainerComponent } from 'src/components/teacher-container/teacher-container.component';
import { TeacherListComponent } from 'src/components/teacher-list/teacher-list.component';
import { TeacherFormComponent } from 'src/components/teacher-form/teacher-form.component';
import { EditTeacherFormComponent } from 'src/components/edit-teacher-form/edit-teacher-form.component';




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
    StudentFormComponent,
    StudentContainerComponent,
    HeaderComponent,
    SchoolContainerComponent,
    SchoolFormComponent,
    NotificationComponentComponent,
    TeacherContainerComponent,
    TeacherListComponent,
    TeacherFormComponent,
    EditTeacherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

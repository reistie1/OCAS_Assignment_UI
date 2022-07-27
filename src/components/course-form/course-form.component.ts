import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass']
})
export class CourseFormComponent implements OnInit {
  data: any;
  courseForm = new FormGroup({
    courseCode: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.pattern('^[A-Za-z0-9\\s_*-]+$')
    ]),
    courseName: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.pattern('^[A-Za-z0-9\\s_*-]+$')
    ]),
    description: new FormControl('', [
    Validators.required,
    Validators.max(255),
    Validators.pattern('^[A-Za-z0-9\\s-_*.,\']+$')
    ]),
  });

  constructor(private courseService: CourseService) { }

  @Output() OnDataReturned = new EventEmitter<any>();
  @Output() OnHide = new EventEmitter<any>();


  ngOnInit(): void {
  }

  submitForm(form: any)
  {
    const {courseCode, courseName, description} = form.value;
    let newCourse = new Course();
    newCourse.courseName = courseName;
    newCourse.courseCode = courseCode;
    newCourse.description = description;
    this.courseService.addCourse(newCourse).subscribe((resp: any) => {
      this.data = resp.data;
      console.log(resp.data);
      this.OnDataReturned.emit(resp.data);
      this.OnHide.emit(false);
    })
  }

}

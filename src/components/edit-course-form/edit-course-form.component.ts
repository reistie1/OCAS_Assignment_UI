import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Course } from 'src/models/Course';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.sass']
})
export class EditCourseFormComponent implements OnInit {
  @Input("data") data: any
  @Output() UpdateParent = new EventEmitter<any>();

  CourseForm = this.formBuilder.group({
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

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.CourseForm.patchValue(this.data);
  }

  onSubmit(form: any)
  {
    let submitValue = this.FormatCourseForm(form.value);

    this.courseService.updateCourse({...submitValue, schoolId: 'a0694c99-bbe6-42f4-88d5-13ebe5baa849'}).subscribe((resp: any) => {
      this.data = resp.data;
      this.UpdateParent.emit(resp.data);
      this.CourseForm.reset();
    });


  }


  FormatCourseForm(values: any)
  {
    const {courseCode, courseName, description} = values;
    let newStudent = new Course();

    newStudent.id = this.data.id
    newStudent.courseCode = courseCode;
    newStudent.courseName = courseName;
    newStudent.description = description

    return newStudent;
  }

}

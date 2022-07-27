import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/models/Student';
import { StudentService } from 'src/services/student-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.sass']
})
export class StudentFormComponent implements OnInit {
  data: Array<Student>
  studentForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.pattern('^[A-Za-z0-9\\s_*-]+$')
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.pattern('^[A-Za-z0-9\\s_*-]+$')
    ]),
    age: new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{0,2}')
    ]),
  });

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {}

  submitForm(form: any)
  {
    let submitValue = this.FormatStudentForm(form.value);

    this.studentService.addStudent(submitValue).subscribe((resp: any) => {
      this.data = resp.data;
    });

    this.studentForm.reset();
  }

  FormatStudentForm(values: any)
  {
    const {firstName, lastName, age} = values;
    let newStudent = new Student();

    newStudent.age = age;
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;

    return newStudent;
  }

}

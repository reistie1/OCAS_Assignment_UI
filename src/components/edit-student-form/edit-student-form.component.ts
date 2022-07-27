import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Student } from 'src/models/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student-form',
  templateUrl: './edit-student-form.component.html',
  styleUrls: ['./edit-student-form.component.sass']
})
export class EditStudentFormComponent implements OnInit {
  @Input("data") data: any;
  @Output() UpdateParent = new EventEmitter<any>();

  StudentForm = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0, ),
  });

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.StudentForm.patchValue(this.data);
  }

  onSubmit(form: any)
  {
    let submitValue = this.FormatStudentForm(form.value);

    this.studentService.updateStudent({...submitValue, schoolId: 'a0694c99-bbe6-42f4-88d5-13ebe5baa849'}).subscribe((resp: any) => {
      this.data = resp.data;
      this.UpdateParent.emit(resp.data);
      this.StudentForm.reset();
    });


  }


  FormatStudentForm(values: any)
  {
    const {firstName, lastName, age} = values;
    let newStudent = new Student();

    newStudent.id = this.data.id
    newStudent.age = age;
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;

    return newStudent;
  }

}

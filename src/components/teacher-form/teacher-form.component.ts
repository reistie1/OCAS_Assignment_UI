import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.sass']
})
export class TeacherFormComponent implements OnInit {
  teacherForm = new FormGroup({
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
    subjectClassifier: new FormControl('', [
    Validators.required,
    Validators.max(255),
    Validators.pattern('^[A-Za-z0-9\\s-_*.,\']+$')
    ]),
  });
  constructor(private teacherService: TeacherService) { }
  @Output() updateParent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  submitForm(form: any)
  {
    const {firstName, lastName, subjectClassifier} = form.value;
    let newTeacher = new Teacher();

    newTeacher.firstName = firstName;
    newTeacher.lastName = lastName;
    newTeacher.subjectClassifier = subjectClassifier;
    newTeacher.schoolId = "a0694c99-bbe6-42f4-88d5-13ebe5baa849";

    this.teacherService.addSchoolTeacher(newTeacher).subscribe((response: any) => {
      this.updateParent.emit(response.data);
      this.teacherForm.reset();
    });
  }



}

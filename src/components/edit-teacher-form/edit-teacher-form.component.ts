import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/models/Teacher';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-edit-teacher-form',
  templateUrl: './edit-teacher-form.component.html',
  styleUrls: ['./edit-teacher-form.component.sass']
})
export class EditTeacherFormComponent implements OnInit {


  @Output() updateParent = new EventEmitter<any>();
  @Output() hideForm = new EventEmitter<any>();
  @Input("data") data: any;

  constructor(private formBuilder: FormBuilder, private teacherService: TeacherService) { }

  teacherForm = this.formBuilder.group({
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

  ngOnInit(): void {
    this.teacherForm.patchValue(this.data);
  }

  submitForm(form: any)
  {
    const {firstName, lastName, subjectClassifier} = form.value;
    let newTeacher = new Teacher();

    newTeacher.id = this.data.id;
    newTeacher.firstName = firstName;
    newTeacher.lastName = lastName;
    newTeacher.subjectClassifier = subjectClassifier;
    newTeacher.schoolId = "a0694c99-bbe6-42f4-88d5-13ebe5baa849";

    this.teacherService.updateSchoolTeacher(newTeacher).subscribe((response: any) => {
      console.log(response)
      this.updateParent.emit(response.data);
      this.teacherForm.reset();
    });
  }

  CancelForm()
  {
    this.hideForm.emit(false);
  }

}

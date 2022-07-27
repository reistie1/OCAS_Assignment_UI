import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.sass']
})
export class StudentContainerComponent implements OnInit {
  public data: Array<Student>
  public editValue: any;
  public showAddForm = false;
  public showEditForm = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.GetStudentList((resp: any) => {
      console.log(resp.data);
      this.data = resp.data;
    });
  }

  GetStudentList(fn: any)
  {
    this.studentService.getStudentList("a0694c99-bbe6-42f4-88d5-13ebe5baa849").subscribe(fn);
  }

  FetchListAfterUpdate(data: any)
  {
    this.GetStudentList((resp: any) => {
      this.data = resp.data;
      this.ToggleAllForms();
    });
  }

  DeleteStudent(studentId: any)
  {
    this.studentService.deleteStudent(studentId).subscribe((resp: any) => {
      if(resp.data)
      {
        this.GetStudentList((resp: any) => {
          this.data = resp.data;
        })
      }
    })
  }

  SetEditStudentValue(data: any)
  {
    this.editValue = data;
    this.ToggleShowEditForm(null);
  }

  ToggleShowAddForm(data: any)
  {
    if(this.showEditForm)
    {
      this.showEditForm = !this.showEditForm;
    }
    this.showAddForm = !this.showAddForm;
  }

  ToggleShowEditForm(data: any)
  {
    if(this.showAddForm)
    {
      this.showAddForm = !this.showAddForm;
    }
    this.showEditForm = !this.showEditForm;
  }

  ToggleAllForms()
  {
    this.showAddForm = false;
    this.showEditForm = false;
  }


}

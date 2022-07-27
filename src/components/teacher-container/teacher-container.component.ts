import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teacher } from 'src/models/Teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-container',
  templateUrl: './teacher-container.component.html',
  styleUrls: ['./teacher-container.component.sass']
})
export class TeacherContainerComponent implements OnInit {
  public data: any[];
  public editValue: any;
  public toggle = false;
  public toggleEdit = false;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
   this.fetchTeacherList((resp: any) => {
    this.data = resp.data;
  });
  }

  doSomething(data: any)
  {
    this.fetchTeacherList((resp: any) => {
      this.data = resp.data;
      this.toggleForm();
    });
  }

  deleteTeacher(data: string)
  {
    console.log(data);
    this.teacherService.deleteSchoolTeacher(data).subscribe((resp: any) => {
      console.log(resp)
      if(resp.data)
      {
        this.fetchTeacherList((response: any) => {
          this.data = response.data
        });
      }
    });
  }

  doSomethingEdit(data: any)
  {
    this.editValue = data;
    this.toggleEditForm();
  }

  doSomethingAfterEdit(data: any)
  {
    this.fetchTeacherList((resp: any) => {
      this.toggleEditForm();
      this.data = resp.data
    })
  }

  fetchTeacherList(fn: any)
  {
    this.teacherService.getSchoolTeachers("").subscribe(fn);
  }

  toggleForm()
  {
    if(this.toggleEdit)
    {
      this.toggleEdit = !this.toggleEdit;
    }
    this.toggle = !this.toggle;
  }

  toggleEditForm()
  {
    if(this.toggle)
    {
      this.toggle = !this.toggle;
    }
    this.toggleEdit = !this.toggleEdit;
  }

  hideEditForm(data: any)
  {
    if(this.toggle)
    {
      this.toggle = !this.toggle;
    }
    this.toggleEdit = data;
  }
}

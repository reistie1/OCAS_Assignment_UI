import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/services/course.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.sass']
})
export class CourseContainerComponent implements OnInit {
  public showAddForm: boolean = false;
  public showEditForm: boolean = false;
  public data: Array<Course>;
  public editValue: any;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.FetchCourseList((resp: any) => { this.data = resp.data })
  }

  DeleteStudent(courseId: any)
  {
    this.courseService.deleteCourse(courseId).subscribe((resp: any) => {
      this.FetchCourseList((resp: any) => {
        this.data = resp.data;
      })
    });
  }

  UpdateStudent(course: any)
  {
    this.editValue = course;
    this.toggleEditForm(null);
  }

  FetchCourseList(fn: any)
  {
    this.courseService.getCourseList("a0694c99-bbe6-42f4-88d5-13ebe5baa849").subscribe(fn);
  }

  GetCourse(data: any)
  {
    this.FetchCourseList((resp: any) => {
      this.data = resp.data;
      this.CloseAllForms();
    });
  }

  toggleAddForm(data: any)
  {
    if(this.showEditForm)
    {
      this.showEditForm = !this.showEditForm
    }
    this.showAddForm = !this.showAddForm;
  }

  toggleEditForm(data: any)
  {
    if(this.showAddForm)
    {
      this.showAddForm = !this.showAddForm
    }
    this.showEditForm = !this.showEditForm;
  }

  CloseAllForms()
  {
    this.showAddForm = false;
    this.showEditForm = false;
  }


}
